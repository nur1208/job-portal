import JobApplicant from "../db/JobApplicant.js";
import Recruiter from "../db/Recruiter.js";

// get user's personal details
export const me = async (req, res) => {
  const { user } = req;
  try {
    if (user.type === "recruiter") {
      const recruiter = await Recruiter.findOne({
        userId: user._id,
      });

      if (recruiter === null) {
        res.status(404).json({
          status: "fall",
          message: "User does not exist",
        });
        return;
      }
      res.status(200).json({
        status: "success",
        recruiter,
      });
    } else {
      const jobApplicant = await JobApplicant.findOne({
        userId: user._id,
      });

      if (jobApplicant == null) {
        res.status(404).json({
          status: "fall",
          message: "User does not exist",
        });
        return;
      }
      res.json({
        status: "success",
        jobApplicant,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fall",
      error,
    });
  }
};
