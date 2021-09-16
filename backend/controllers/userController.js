import JobApplicant from "../db/JobApplicant.js";
import Recruiter from "../db/Recruiter.js";
import User from "../db/User.js";
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

// get user details from id
export const getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });

  if (user === null) {
    res.status(404).json({
      message: "User does not exist",
    });
    return;
  }

  // TODO refactor the following code.
  // TODO only add admin can get the details info of other users
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
};

export const updateUser = async (req, res) => {
  const { user } = req;
  const data = req.body;
  try {
    if (user.type == "recruiter") {
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
      // TODO improve the following code.
      if (data.name) {
        recruiter.name = data.name;
      }
      if (data.contactNumber) {
        recruiter.contactNumber = data.contactNumber;
      }
      if (data.bio) {
        recruiter.bio = data.bio;
      }

      const updateRecruiter = await recruiter.save();

      res.status(200).json({
        status: "success",
        message: "user update successfully",
        data: updateRecruiter,
      });
    } else {
      const jobApplicant = await JobApplicant.findOne({
        userId: user._id,
      });

      if (jobApplicant == null) {
        res.status(404).json({
          message: "User does not exist",
        });
        return;
      }
      if (data.name) {
        jobApplicant.name = data.name;
      }
      if (data.education) {
        jobApplicant.education = data.education;
      }
      if (data.skills) {
        jobApplicant.skills = data.skills;
      }
      if (data.resume) {
        jobApplicant.resume = data.resume;
      }
      if (data.profile) {
        jobApplicant.profile = data.profile;
      }
      const updatedJobApplicant = await jobApplicant.save();
      res.json({
        status: "success",
        message: "user update successfully",
        data: updatedJobApplicant,
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
