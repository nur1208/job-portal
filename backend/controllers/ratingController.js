import mongoose from "mongoose";
import Application from "../db/Application.js";
import Rating from "../db/Rating.js";
import JobApplicant from "../db/JobApplicant.js";
import Job from "../db/Job.js";

// to add or update a rating
export const addUpdateRating = async (req, res) => {
  const { user } = req;
  const data = req.body;

  try {
    if (user.type === "recruiter") {
      // can rate applicant
      // update recruiter rating for applicant
      let rating = await Rating.findOne({
        senderId: user._id,
        receiverId: data.applicantId,
        category: "applicant",
      });

      if (rating === null) {
        // create new rating

        // rating only the applicant that his been accepted and
        // finished working
        const acceptedApplicant = await Application.countDocuments(
          {
            userId: data.applicantId,
            recruiterId: user._id,
            status: {
              $in: ["accepted", "finished"],
            },
          }
        );

        // check if there is accepted applicant
        if (acceptedApplicant > 0) {
          // add a new rating

          rating = new Rating({
            category: "applicant",
            receiverId: data.applicantId,
            senderId: user._id,
            rating: data.rating,
          });

          await rating.save();

          //TODO use middleware to update rating
          // get the average of ratings

          const result = await Rating.aggregate([
            {
              $match: {
                receiverId: mongoose.Types.ObjectId(
                  data.applicantId
                ),
                category: "applicant",
              },
            },
            {
              $group: {
                _id: {},
                average: { $avg: "$rating" },
              },
            },
          ]);

          // update the user's rating
          if (result === null) {
            res.status(400).json({
              message: "Error while calculating rating",
            });
            return;
          }

          const avg = result[0].average;

          const applicant = await JobApplicant.findOneAndUpdate(
            {
              userId: data.applicantId,
            },
            {
              $set: {
                rating: avg,
              },
            }
          );

          if (applicant === null) {
            res.status(400).json({
              message:
                "Error while updating applicant's average rating",
            });
            return;
          }

          res.json({
            message: "Rating added successfully",
          });
        } else {
          // you cannot rate
          res.status(400).json({
            message:
              "Applicant didn't worked under you. Hence you cannot give a rating.",
          });
        }
      } else {
        // update rating
        rating.rating = data.rating;

        await rating.save();

        // get the average of ratings
        // TODO refactor the following code:
        const result = await Rating.aggregate([
          {
            $match: {
              receiverId: mongoose.Types.ObjectId(
                data.applicantId
              ),
              category: "applicant",
            },
          },
          {
            $group: {
              _id: {},
              average: { $avg: "$rating" },
            },
          },
        ]);

        // update the user's rating
        if (result === null) {
          res.status(400).json({
            message: "Error while calculating rating",
          });
          return;
        }
        const avg = result[0].average;
        const applicant = JobApplicant.findOneAndUpdate(
          {
            userId: data.applicantId,
          },
          {
            $set: {
              rating: avg,
            },
          }
        );

        if (applicant === null) {
          res.status(400).json({
            message:
              "Error while updating applicant's average rating",
          });
          return;
        }
        res.json({
          message: "Rating updated successfully",
        });
      }
    } else {
      // applicant can rate job
      // TODO refactor the following code:

      let rating = await Rating.findOne({
        senderId: user._id,
        receiverId: data.jobId,
        category: "job",
      });

      if (rating === null) {
        const acceptedApplicant = await Application.countDocuments(
          {
            userId: user._id,
            jobId: data.jobId,
            status: {
              $in: ["accepted", "finished"],
            },
          }
        );

        if (acceptedApplicant > 0) {
          // add a new rating

          rating = new Rating({
            category: "job",
            receiverId: data.jobId,
            senderId: user._id,
            rating: data.rating,
          });

          await rating.save();

          // get the average of ratings
          const result = await Rating.aggregate([
            {
              $match: {
                receiverId: mongoose.Types.ObjectId(data.jobId),
                category: "job",
              },
            },
            {
              $group: {
                _id: {},
                average: { $avg: "$rating" },
              },
            },
          ]);

          if (result === null) {
            res.status(400).json({
              message: "Error while calculating rating",
            });
            return;
          }

          const avg = result[0].average;
          const foundJob = await Job.findOneAndUpdate(
            {
              _id: data.jobId,
            },
            {
              $set: {
                rating: avg,
              },
            }
          );

          if (foundJob === null) {
            res.status(400).json({
              message: "Error while updating job's average rating",
            });
            return;
          }

          res.json({
            message: "Rating added successfully",
          });
        } else {
          // you cannot rate
          res.status(400).json({
            message:
              "You haven't worked for this job. Hence you cannot give a rating.",
          });
        }
      } else {
        // update the rating
        rating.rating = data.rating;
        await rating.save();

        // get the average of ratings
        const result = await Rating.aggregate([
          {
            $match: {
              receiverId: mongoose.Types.ObjectId(data.jobId),
              category: "job",
            },
          },
          {
            $group: {
              _id: {},
              average: { $avg: "$rating" },
            },
          },
        ]);

        if (result === null) {
          res.status(400).json({
            message: "Error while calculating rating",
          });
          return;
        }
        const avg = result[0].average;
        console.log(avg);

        const foundJob = await Job.findOneAndUpdate(
          {
            _id: data.jobId,
          },
          {
            $set: {
              rating: avg,
            },
          }
        );

        if (foundJob === null) {
          res.status(400).json({
            message: "Error while updating job's average rating",
          });
          return;
        }
        res.json({
          message: "Rating added successfully",
        });
      }
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getPersonalRating = async (req, res) => {
  const { user } = req;

  try {
    const rating = await Rating.findOne({
      senderId: user._id,
      receiverId: req.query.id,
      category: user.type === "recruiter" ? "applicant" : "job",
    });

    if (rating === null) {
      res.json({
        rating: -1,
      });
      return;
    }
    res.json({
      rating: rating.rating,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
