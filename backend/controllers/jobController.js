import Job from "../db/Job.js";

export const createJob = async (req, res) => {
  const { user } = req;

  if (user.type != "recruiter") {
    res.status(401).json({
      status: "fall",
      message: "You don't have permissions to add jobs",
    });
    return;
  }

  const data = req.body;

  const job = new Job({
    userId: user._id,
    title: data.title,
    maxApplicants: data.maxApplicants,
    maxPositions: data.maxPositions,
    dateOfPosting: data.dateOfPosting,
    deadline: data.deadline,
    skillsets: data.skillsets,
    jobType: data.jobType,
    duration: data.duration,
    salary: data.salary,
    rating: data.rating,
  });

  try {
    const newJob = await job.save();

    res.json({
      message: "Job added successfully to the database",
      data: newJob,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllJobs = async (req, res) => {
  const { user } = req;

  // findParams will hold all find parameters (query stuff)
  let findParams = {};
  // sortParams will hold all sort parameters
  let sortParams = {};

  // pagination
  // const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  // const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
  // const skip = page - 1 >= 0 ? (page - 1) * limit : 0;

  // to list down jobs posted by a particular recruiter
  if (user.type === "recruiter" && req.query.myJobs) {
    findParams = {
      ...findParams,
      userId: user._id,
    };
  }

  // to filter job  based on title using the query passed.
  if (req.query.q) {
    // adding the query to filter (findParams)
    findParams = {
      ...findParams,
      title: {
        $regex: new RegExp(req.query.q, "i"),
      },
    };
  }
  // to filter job based on job type single or more.
  if (req.query.jobType) {
    let jobTypes = [];
    // if jobType array, the user passed more than one jobType to filter out.
    if (Array.isArray(req.query.jobType)) {
      jobTypes = req.query.jobType;
      // else if only there is one jobType to filter out.
    } else {
      jobTypes = [req.query.jobType];
    }
    console.log(jobTypes);
    // adding jobType or jobTypes to filter (findParams)
    findParams = {
      ...findParams,
      jobType: {
        $in: jobTypes,
      },
    };
  }

  // to filter jobs using salary
  if (req.query.salaryMin && req.query.salaryMax) {
    // find jobs with salaryMin >= job.salary && salaryMax <= job.salary
    findParams = {
      ...findParams,
      $and: [
        {
          salary: {
            $gte: parseInt(req.query.salaryMin),
          },
        },
        {
          salary: {
            $lte: parseInt(req.query.salaryMax),
          },
        },
      ],
    };
    //// find jobs with salaryMin >= job.salary
  } else if (req.query.salaryMin) {
    findParams = {
      ...findParams,
      salary: {
        $gte: parseInt(req.query.salaryMin),
      },
    };

    // find jobs with salaryMax <= job
  } else if (req.query.salaryMax) {
    findParams = {
      ...findParams,
      salary: {
        $lte: parseInt(req.query.salaryMax),
      },
    };
  }

  //find jobs with query duration < duration.
  if (req.query.duration) {
    findParams = {
      ...findParams,
      duration: {
        $lt: parseInt(req.query.duration),
      },
    };
  }

  // sorting found jobs in ascending
  if (req.query.asc) {
    // there is more there one thing to sort on
    if (Array.isArray(req.query.asc)) {
      req.query.asc.map((key) => {
        sortParams = {
          ...sortParams,
          [key]: 1,
        };
      });
      // only single thing to sort on
    } else {
      sortParams = {
        ...sortParams,
        [req.query.asc]: 1,
      };
    }
  }
  //  TODO refactor the two sort code
  // sorting found jobs in descending
  if (req.query.desc) {
    // there is more there one thing to sort on

    if (Array.isArray(req.query.desc)) {
      req.query.desc.map((key) => {
        sortParams = {
          ...sortParams,
          [key]: -1,
        };
      });

      // only single thing to sort on
    } else {
      sortParams = {
        ...sortParams,
        [req.query.desc]: -1,
      };
    }
  }

  console.log(findParams);
  console.log(sortParams);

  // Job.find(findParams).collation({ locale: "en" }).sort(sortParams);
  // .skip(skip)
  // .limit(limit)

  // creating aggregate stages
  let arr = [
    // look in Recruiter model and get
    //the $lookup stage adds a new array field whose elements are the matching documents from the "joined" collection.
    {
      $lookup: {
        from: "recruiters",
        // job.userId
        localField: "userId",
        // recruiter.userId
        foreignField: "userId",
        //output array field (recruiter =[{jobDoc + recruiterDoc},...])
        as: "recruiter",
      },
    },
    // create each doc for recruiter array.
    { $unwind: "$recruiter" },
    // filter the doc using findParams
    { $match: findParams },
    // { $project: { "$recruiter._id": 1 } },
  ];

  // if there is element inside sort element
  // TODO we can refactor this code.
  if (Object.keys(sortParams).length > 0) {
    arr = [
      {
        $lookup: {
          from: "Recruiter",
          localField: "userId",
          foreignField: "userId",
          as: "recruiter",
        },
      },
      { $unwind: "$recruiter" },
      { $match: findParams },
      {
        $sort: sortParams,
      },
    ];
  }

  console.log(arr);

  // add the arr of aggregation stages to aggregation function
  // TODO  find way to unselect recruiter
  try {
    const jobs = await Job.aggregate(arr);

    // const jobs = await jobsQueryObject.select("-recruiter");
    res.json({
      status: "success",
      results: jobs.length,
      data: jobs,
    });
    console.log({ jobs });

    if (jobs === null) {
      res.status(404).json({
        status: "fall",
        message: "No job found",
      });
    }
  } catch (error) {
    res.status(400).json({ status: "fall", error });
  }

  // Job.aggregate(arr)
  //   .then((posts) => {
  //     if (posts == null) {
  //       res.status(404).json({
  //         message: "No job found",
  //       });
  //       return;
  //     }
  //     res.json(posts);
  //   })
  //   .catch((err) => {
  //     res.status(400).json(err);
  //   });
};
