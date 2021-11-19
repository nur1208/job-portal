import Application from "../db/Application.js";
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

export const getAllJobsVisiter = async () => {};

export const myJob = async (req, res, next) => {
  const { user } = req;

  // findParams will hold all find parameters (query stuff)
  let findParams = {};
  // sortParams will hold all sort parameters

  // pagination
  // const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  // const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
  // const skip = page - 1 >= 0 ? (page - 1) * limit : 0;

  // console.log({ query: req.query });

  // to list down jobs posted by a particular recruiter
  if (user.type === "recruiter" && req.query.myJobs) {
    findParams = {
      ...findParams,
      userId: user._id,
    };
  }

  req.findParams = findParams;

  next();
};

export const getAllJobs = async (req, res) => {
  // const { user } = req;

  // findParams will hold all find parameters (query stuff)
  // let findParams = {};
  let findParams = req.findParams || {};
  // sortParams will hold all sort parameters
  let sortParams = {};

  // pagination
  // const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  // const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
  // const skip = page - 1 >= 0 ? (page - 1) * limit : 0;

  // console.log({ query: req.query });

  // to list down jobs posted by a particular recruiter
  // if (user.type === "recruiter" && req.query.myJobs) {
  //   findParams = {
  //     ...findParams,
  //     userId: user._id,
  //   };
  // }

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
    console.log({ jobTypes });
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

  // console.log({ findParams });
  // /  console.log({ sortParams });

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
          from: "recruiters",
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

  // console.log(arr);

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
    // console.log({ jobs });

    if (jobs === null) {
      res.status(404).json({
        status: "fall",
        message: "No job found",
      });
    }
  } catch (error) {
    res.status(400).json({ status: "fall", error });
  }
};

export const deleteJob = async (req, res) => {
  const { user } = req;

  if (user.type != "recruiter") {
    res.status(401).json({
      status: "fall",
      message: "You don't have permissions to delete the job",
    });
    return;
  }

  // recruiter can only delete has job (the jobs that he posted)
  const job = await Job.findOneAndDelete({
    _id: req.params.id,
    userId: user.id,
  });

  if (job === null) {
    res.status(401).json({
      status: "fall",
      message: "You don't have permissions to delete the job",
    });
    return;
  }

  res.json({
    status: "success",
    message: "Job deleted successfully",
  });
};

export const updateJob = async (req, res) => {
  const { title, salary, deadline, maxApplicants, maxPositions } =
    req.body;

  try {
    const job = await Job.findById(req.params.id);

    job.title = title;
    job.salary = salary;
    job.deadline = deadline;
    job.maxApplicants = maxApplicants;
    job.maxPositions = maxPositions;

    const updatedJob = await job.save();
    // console.log(job);
    // console.log({ title, salary, deadline, maxApplicants, maxPositions });
    res.send({ updatedJob, message: "Job updated successfully" });
  } catch (error) {
    res.status(404).send({ err: error, message: error.message });
  }
};

export const applyForJob = async (req, res) => {
  const { user } = req;
  if (user.type !== "applicant") {
    res.status(401).json({
      message: "You don't have permissions to apply for a job",
    });
    return;
  }
  const data = req.body;
  const jobId = req.params.id;

  // check whether applied previously
  // find job
  // check count of active applications < limit
  // check user had < 10 active applications && check if user is not having any accepted jobs (user id)
  // store the data in applications

  // 1) check whether applied previously

  // finding application with jobId and the logged in user
  // and the job still available

  try {
    const appliedApplication = await Application.findOne({
      userId: user._id,
      jobId: jobId,
      status: {
        $nin: ["deleted", "accepted", "cancelled"],
      },
    });

    // if the user already applied for the job send him and error message
    if (appliedApplication !== null) {
      res.status(400).json({
        status: "fall",
        message: "You have already applied for this job",
      });
      return;
    }

    // 2) find job
    const job = await Job.findOne({ _id: jobId });

    if (job === null) {
      res.status(404).json({
        message: "Job does not exist",
      });
      return;
    }

    // 3) check count of active applications < limit
    const activeApplicationCount = await Application.countDocuments(
      {
        jobId: jobId,
        status: {
          $nin: ["rejected", "deleted", "cancelled", "finished"],
        },
      }
    );

    if (activeApplicationCount < job.maxApplicants) {
      const myActiveApplicationCount =
        await Application.countDocuments({
          userId: user._id,
          status: {
            $nin: ["rejected", "deleted", "cancelled", "finished"],
          },
        });

      if (myActiveApplicationCount < 10) {
        const acceptedJobs = await Application.countDocuments({
          userId: user._id,
          status: "accepted",
        });

        if (acceptedJobs === 0) {
          const application = new Application({
            userId: user._id,
            recruiterId: job.userId,
            jobId: job._id,
            status: "applied",
            sop: data.sop,
          });

          await application.save();

          res.json({
            status: "success",
            message: "Job application successful",
          });
        } else {
          res.status(400).json({
            status: "fall",
            message:
              "You already have an accepted job. Hence you cannot apply.",
          });
        }
      } else {
        res.status(400).json({
          status: "fall",
          message:
            "You have 10 active applications. Hence you cannot apply.",
        });
      }
    } else {
      res.status(400).json({
        status: "fall",
        message: "Application limit reached",
      });
    }
  } catch (error) {
    res.json(400).json({ status: "fall", error });
  }

  // Application.findOne({
  //   userId: user._id,
  //   jobId: jobId,
  //   status: {
  //     $nin: ["deleted", "accepted", "cancelled"],
  //   },
  // })
  //   .then((appliedApplication) => {
  //     console.log(appliedApplication);
  //     if (appliedApplication !== null) {
  //       res.status(400).json({
  //         message: "You have already applied for this job",
  //       });
  //       return;
  //     }

  //     Job.findOne({ _id: jobId })
  //       .then((job) => {
  //         if (job === null) {
  //           res.status(404).json({
  //             message: "Job does not exist",
  //           });
  //           return;
  //         }
  //         Application.countDocuments({
  //           jobId: jobId,
  //           status: {
  //             $nin: [
  //               "rejected",
  //               "deleted",
  //               "cancelled",
  //               "finished",
  //             ],
  //           },
  //         })
  //           .then((activeApplicationCount) => {
  //             if (activeApplicationCount < job.maxApplicants) {
  //               Application.countDocuments({
  //                 userId: user._id,
  //                 status: {
  //                   $nin: [
  //                     "rejected",
  //                     "deleted",
  //                     "cancelled",
  //                     "finished",
  //                   ],
  //                 },
  //               })
  //                 .then((myActiveApplicationCount) => {
  //                   if (myActiveApplicationCount < 10) {
  //                     Application.countDocuments({
  //                       userId: user._id,
  //                       status: "accepted",
  //                     }).then((acceptedJobs) => {
  //                       if (acceptedJobs === 0) {
  //                         const application = new Application({
  //                           userId: user._id,
  //                           recruiterId: job.userId,
  //                           jobId: job._id,
  //                           status: "applied",
  //                           sop: data.sop,
  //                         });
  //                         application
  //                           .save()
  //                           .then(() => {
  //                             res.json({
  //                               message:
  //                                 "Job application successful",
  //                             });
  //                           })
  //                           .catch((err) => {
  //                             res.status(400).json(err);
  //                           });
  //                       } else {
  //                         res.status(400).json({
  //                           message:
  //                             "You already have an accepted job. Hence you cannot apply.",
  //                         });
  //                       }
  //                     });
  //                   } else {
  //                     res.status(400).json({
  //                       message:
  //                         "You have 10 active applications. Hence you cannot apply.",
  //                     });
  //                   }
  //                 })
  //                 .catch((err) => {
  //                   res.status(400).json(err);
  //                 });
  //             } else {
  //               res.status(400).json({
  //                 message: "Application limit reached",
  //               });
  //             }
  //           })
  //           .catch((err) => {
  //             res.status(400).json(err);
  //           });
  //       })
  //       .catch((err) => {
  //         res.status(400).json(err);
  //       });
  //   })
  //   .catch((err) => {
  //     res.json(400).json(err);
  //   });
};

// recruiter gets applications for a particular job [pagination]
export const getAllJobApplications = async (req, res) => {
  const { user } = req;
  // refactor this code.
  if (user.type != "recruiter") {
    res.status(401).json({
      message:
        "You don't have permissions to view job applications",
    });
    return;
  }
  const jobId = req.params.id;

  // const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  // const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
  // const skip = page - 1 >= 0 ? (page - 1) * limit : 0;

  let findParams = {
    jobId: jobId,
    recruiterId: user._id,
  };

  let sortParams = {};

  if (req.query.status) {
    findParams = {
      ...findParams,
      status: req.query.status,
    };
  }

  try {
    const applications = await Application.find(findParams)
      .collation({ locale: "en" })
      .sort(sortParams);

    res.json(applications);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllApplications = async (req, res) => {
  const { user } = req;

  // const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  // const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
  // const skip = page - 1 >= 0 ? (page - 1) * limit : 0;

  // TODO reread the following conde;

  try {
    const applications = await Application.aggregate([
      {
        $lookup: {
          from: "jobapplicantinfos",
          localField: "userId",
          foreignField: "userId",
          as: "jobApplicant",
        },
      },
      { $unwind: "$jobApplicant" },
      {
        $lookup: {
          from: "jobs",
          localField: "jobId",
          foreignField: "_id",
          as: "job",
        },
      },
      { $unwind: "$job" },
      {
        $lookup: {
          from: "recruiters",
          localField: "recruiterId",
          foreignField: "userId",
          as: "recruiter",
        },
      },
      { $unwind: "$recruiter" },
      {
        $match: {
          [user.type === "recruiter" ? "recruiterId" : "userId"]:
            user._id,
        },
      },
      {
        $sort: {
          dateOfApplication: -1,
        },
      },
    ]);

    res.json(applications);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateApplications = async (req, res) => {
  const { user } = req;
  const { id } = req.params;
  const { status } = req.body;

  // "applied", // when a applicant is applied
  // "shortlisted", // when a applicant is shortlisted
  // "accepted", // when a applicant is accepted
  // "rejected", // when a applicant is rejected
  // "deleted", // when any job is deleted
  // "cancelled", // an application is cancelled by its author or when other application is accepted
  // "finished", // when job is over

  try {
    if (user.type === "recruiter") {
      // accepted
      if (status === "accepted") {
        // get job id from application
        // get job info for maxPositions count
        // count applications that are already accepted
        // compare and if condition is satisfied, then save

        const application = await Application.findOne({
          _id: id,
          recruiterId: user._id,
        });

        if (application === null) {
          res.status(404).json({
            message: "Application not found",
          });
          return;
        }

        // make sure that the job has been not delete
        const job = await Job.findOne({
          _id: application.jobId,
          userId: user._id,
        });

        if (job === null) {
          res.status(404).json({
            status: "fall",
            message: "Job does not exist",
          });
          return;
        }

        const activeApplicationCount =
          await Application.countDocuments({
            recruiterId: user._id,
            jobId: job._id,
            status: "accepted",
          });

        if (activeApplicationCount < job.maxPositions) {
          // accepted
          application.status = status;
          application.dateOfJoining = req.body.dateOfJoining;

          await application.save();

          // delete all the other application that the accepted user
          // apply to them.
          Application.updateMany(
            {
              _id: {
                $ne: application._id,
              },
              userId: application.userId,
              status: {
                $nin: [
                  "rejected",
                  "deleted",
                  "cancelled",
                  "accepted",
                  "finished",
                ],
              },
            },
            {
              $set: {
                status: "cancelled",
              },
            },
            { multi: true }
          );
          //TODO  the following if state not necessary
          if (status === "accepted") {
            await Job.findOneAndUpdate(
              {
                _id: job._id,
                userId: user._id,
              },
              {
                $set: {
                  acceptedCandidates: activeApplicationCount + 1,
                },
              }
            );

            res.json({
              message: `Application ${status} successfully`,
            });
          }
        } else {
          res.status(400).json({
            message:
              "All positions for this job are already filled",
          });
        }
      } else {
        // not rejected not deleted not canceled and not accepted
        // the status value (shortlisted, finished)
        const application = await Application.findOneAndUpdate(
          {
            _id: id,
            recruiterId: user._id,
            status: {
              $nin: ["rejected", "deleted", "cancelled"],
            },
          },
          {
            $set: {
              status: status,
            },
          }
        );

        if (application === null) {
          res.status(400).json({
            message: "Application status cannot be updated",
          });
          return;
        }

        if (status === "finished") {
          res.json({
            message: `Job ${status} successfully`,
          });
        } else {
          res.json({
            message: `Application ${status} successfully`,
          });
        }
      }
      // not recruiter for applicant
    } else {
      if (status === "cancelled") {
        await Application.findOneAndUpdate(
          {
            _id: id,
            userId: user._id,
          },
          {
            $set: {
              status: status,
            },
          }
        );

        res.json({
          message: `Application ${status} successfully`,
        });
      } else {
        res.status(401).json({
          message:
            "You don't have permissions to update job status",
        });
      }
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getTotalJobsNumber = async (req, res) => {
  const length = await Job.countDocuments();

  res.status(200).json({ status: "success", length });
};
