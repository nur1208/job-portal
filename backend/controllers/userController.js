import mongoose from "mongoose";
import Application from "../db/Application.js";
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
// get a list of final applicants for current job : recruiter
// get a list of final applicants for all his jobs : recruiter
export const getAllApplicants = async (req, res) => {
  const { user } = req;

  try {
    // check if the user is recruiter
    if (user.type === "recruiter") {
      // add the uer id to findParams
      let findParams = {
        recruiterId: user._id,
      };
      // if there is jobId add it to the findParams
      // this is very smart way to get all the applicants
      // or just applicants for specific job
      if (req.query.jobId) {
        findParams = {
          ...findParams,
          jobId: new mongoose.Types.ObjectId(req.query.jobId),
        };
      }

      // if there is one status or more status
      //  TODO create apiFilter class
      if (req.query.status) {
        // more
        if (Array.isArray(req.query.status)) {
          findParams = {
            ...findParams,
            status: { $in: req.query.status },
          };
          // one
        } else {
          findParams = {
            ...findParams,
            status: req.query.status,
          };
        }
      }
      // for adding sort parameters
      let sortParams = {};

      // if there is no asc and desc query for sorting the output
      // then just sort them with id ascending
      if (!req.query.asc && !req.query.desc) {
        sortParams = { _id: 1 };
      }

      // if there is ascending query
      // for example asc=name
      // [key]:1 = ["name"]:1 = name:1
      if (req.query.asc) {
        if (Array.isArray(req.query.asc)) {
          req.query.asc.map((key) => {
            sortParams = {
              ...sortParams,
              [key]: 1,
            };
          });
        } else {
          sortParams = {
            ...sortParams,
            [req.query.asc]: 1,
          };
        }
      }

      // if there is descending query
      // for example desc=name
      // [key]:1 = ["name"]:1 = name:1
      if (req.query.desc) {
        if (Array.isArray(req.query.desc)) {
          req.query.desc.map((key) => {
            sortParams = {
              ...sortParams,
              [key]: -1,
            };
          });
        } else {
          sortParams = {
            ...sortParams,
            [req.query.desc]: -1,
          };
        }
      }

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
        { $match: findParams },
        { $sort: sortParams },
      ]);

      if (applications.length === 0) {
        res.status(404).json({
          message: "No applicants found",
        });
        return;
      }
      res.json(applications);
    } else {
      res.status(400).json({
        message: "You are not allowed to access applicants list",
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
