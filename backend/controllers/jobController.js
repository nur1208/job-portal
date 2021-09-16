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
