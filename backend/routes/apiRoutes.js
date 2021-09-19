const express = require("express");
const mongoose = require("mongoose");
const jwtAuth = require("../lib/jwtAuth");

const User = require("../db/User");
const JobApplicant = require("../db/JobApplicant");
const Recruiter = require("../db/Recruiter");
const Job = require("../db/Job");
const Application = require("../db/Application");
const Rating = require("../db/Rating");

const router = express.Router();

// recruiter/applicant gets all his applications [pagination]

// update status of application: [Applicant: Can cancel, Recruiter: Can do everything] [todo: test: done]
// router.put("/applications/:id", jwtAuth, (req, res) => {
//   const user = req.user;
//   const id = req.params.id;
//   const status = req.body.status;

//   // "applied", // when a applicant is applied
//   // "shortlisted", // when a applicant is shortlisted
//   // "accepted", // when a applicant is accepted
//   // "rejected", // when a applicant is rejected
//   // "deleted", // when any job is deleted
//   // "cancelled", // an application is cancelled by its author or when other application is accepted
//   // "finished", // when job is over

//   if (user.type === "recruiter") {
//     if (status === "accepted") {
//       // get job id from application
//       // get job info for maxPositions count
//       // count applications that are already accepted
//       // compare and if condition is satisfied, then save

//       Application.findOne({
//         _id: id,
//         recruiterId: user._id,
//       })
//         .then((application) => {
//           if (application === null) {
//             res.status(404).json({
//               message: "Application not found",
//             });
//             return;
//           }

//           Job.findOne({
//             _id: application.jobId,
//             userId: user._id,
//           }).then((job) => {
//             if (job === null) {
//               res.status(404).json({
//                 message: "Job does not exist",
//               });
//               return;
//             }

//             Application.countDocuments({
//               recruiterId: user._id,
//               jobId: job._id,
//               status: "accepted",
//             }).then((activeApplicationCount) => {
//               if (activeApplicationCount < job.maxPositions) {
//                 // accepted
//                 application.status = status;
//                 application.dateOfJoining = req.body.dateOfJoining;
//                 application
//                   .save()
//                   .then(() => {
//                     Application.updateMany(
//                       {
//                         _id: {
//                           $ne: application._id,
//                         },
//                         userId: application.userId,
//                         status: {
//                           $nin: [
//                             "rejected",
//                             "deleted",
//                             "cancelled",
//                             "accepted",
//                             "finished",
//                           ],
//                         },
//                       },
//                       {
//                         $set: {
//                           status: "cancelled",
//                         },
//                       },
//                       { multi: true }
//                     )
//                       .then(() => {
//                         if (status === "accepted") {
//                           Job.findOneAndUpdate(
//                             {
//                               _id: job._id,
//                               userId: user._id,
//                             },
//                             {
//                               $set: {
//                                 acceptedCandidates:
//                                   activeApplicationCount + 1,
//                               },
//                             }
//                           )
//                             .then(() => {
//                               res.json({
//                                 message: `Application ${status} successfully`,
//                               });
//                             })
//                             .catch((err) => {
//                               res.status(400).json(err);
//                             });
//                         } else {
//                           res.json({
//                             message: `Application ${status} successfully`,
//                           });
//                         }
//                       })
//                       .catch((err) => {
//                         res.status(400).json(err);
//                       });
//                   })
//                   .catch((err) => {
//                     res.status(400).json(err);
//                   });
//               } else {
//                 res.status(400).json({
//                   message:
//                     "All positions for this job are already filled",
//                 });
//               }
//             });
//           });
//         })
//         .catch((err) => {
//           res.status(400).json(err);
//         });
//     } else {
//       Application.findOneAndUpdate(
//         {
//           _id: id,
//           recruiterId: user._id,
//           status: {
//             $nin: ["rejected", "deleted", "cancelled"],
//           },
//         },
//         {
//           $set: {
//             status: status,
//           },
//         }
//       )
//         .then((application) => {
//           if (application === null) {
//             res.status(400).json({
//               message: "Application status cannot be updated",
//             });
//             return;
//           }
//           if (status === "finished") {
//             res.json({
//               message: `Job ${status} successfully`,
//             });
//           } else {
//             res.json({
//               message: `Application ${status} successfully`,
//             });
//           }
//         })
//         .catch((err) => {
//           res.status(400).json(err);
//         });
//     }
//   } else {
//     if (status === "cancelled") {
//       console.log(id);
//       console.log(user._id);
//       Application.findOneAndUpdate(
//         {
//           _id: id,
//           userId: user._id,
//         },
//         {
//           $set: {
//             status: status,
//           },
//         }
//       )
//         .then((tmp) => {
//           console.log(tmp);
//           res.json({
//             message: `Application ${status} successfully`,
//           });
//         })
//         .catch((err) => {
//           res.status(400).json(err);
//         });
//     } else {
//       res.status(401).json({
//         message: "You don't have permissions to update job status",
//       });
//     }
//   }
// });

// get a list of final applicants for current job : recruiter
// get a list of final applicants for all his jobs : recuiter
router.get("/applicants", jwtAuth, (req, res) => {
  const user = req.user;
  if (user.type === "recruiter") {
    let findParams = {
      recruiterId: user._id,
    };
    if (req.query.jobId) {
      findParams = {
        ...findParams,
        jobId: new mongoose.Types.ObjectId(req.query.jobId),
      };
    }
    if (req.query.status) {
      if (Array.isArray(req.query.status)) {
        findParams = {
          ...findParams,
          status: { $in: req.query.status },
        };
      } else {
        findParams = {
          ...findParams,
          status: req.query.status,
        };
      }
    }
    let sortParams = {};

    if (!req.query.asc && !req.query.desc) {
      sortParams = { _id: 1 };
    }

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

    Application.aggregate([
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
    ])
      .then((applications) => {
        if (applications.length === 0) {
          res.status(404).json({
            message: "No applicants found",
          });
          return;
        }
        res.json(applications);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(400).json({
      message: "You are not allowed to access applicants list",
    });
  }
});

// to add or update a rating [todo: test]
router.put("/rating", jwtAuth, (req, res) => {
  const user = req.user;
  const data = req.body;
  if (user.type === "recruiter") {
    // can rate applicant
    Rating.findOne({
      senderId: user._id,
      receiverId: data.applicantId,
      category: "applicant",
    })
      .then((rating) => {
        if (rating === null) {
          console.log("new rating");
          Application.countDocuments({
            userId: data.applicantId,
            recruiterId: user._id,
            status: {
              $in: ["accepted", "finished"],
            },
          })
            .then((acceptedApplicant) => {
              if (acceptedApplicant > 0) {
                // add a new rating

                rating = new Rating({
                  category: "applicant",
                  receiverId: data.applicantId,
                  senderId: user._id,
                  rating: data.rating,
                });

                rating
                  .save()
                  .then(() => {
                    // get the average of ratings
                    Rating.aggregate([
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
                    ])
                      .then((result) => {
                        // update the user's rating
                        if (result === null) {
                          res.status(400).json({
                            message:
                              "Error while calculating rating",
                          });
                          return;
                        }
                        const avg = result[0].average;

                        JobApplicant.findOneAndUpdate(
                          {
                            userId: data.applicantId,
                          },
                          {
                            $set: {
                              rating: avg,
                            },
                          }
                        )
                          .then((applicant) => {
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
                          })
                          .catch((err) => {
                            res.status(400).json(err);
                          });
                      })
                      .catch((err) => {
                        res.status(400).json(err);
                      });
                  })
                  .catch((err) => {
                    res.status(400).json(err);
                  });
              } else {
                // you cannot rate
                res.status(400).json({
                  message:
                    "Applicant didn't worked under you. Hence you cannot give a rating.",
                });
              }
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        } else {
          rating.rating = data.rating;
          rating
            .save()
            .then(() => {
              // get the average of ratings
              Rating.aggregate([
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
              ])
                .then((result) => {
                  // update the user's rating
                  if (result === null) {
                    res.status(400).json({
                      message: "Error while calculating rating",
                    });
                    return;
                  }
                  const avg = result[0].average;
                  JobApplicant.findOneAndUpdate(
                    {
                      userId: data.applicantId,
                    },
                    {
                      $set: {
                        rating: avg,
                      },
                    }
                  )
                    .then((applicant) => {
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
                    })
                    .catch((err) => {
                      res.status(400).json(err);
                    });
                })
                .catch((err) => {
                  res.status(400).json(err);
                });
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    // applicant can rate job
    Rating.findOne({
      senderId: user._id,
      receiverId: data.jobId,
      category: "job",
    })
      .then((rating) => {
        console.log(user._id);
        console.log(data.jobId);
        console.log(rating);
        if (rating === null) {
          console.log(rating);
          Application.countDocuments({
            userId: user._id,
            jobId: data.jobId,
            status: {
              $in: ["accepted", "finished"],
            },
          })
            .then((acceptedApplicant) => {
              if (acceptedApplicant > 0) {
                // add a new rating

                rating = new Rating({
                  category: "job",
                  receiverId: data.jobId,
                  senderId: user._id,
                  rating: data.rating,
                });

                rating
                  .save()
                  .then(() => {
                    // get the average of ratings
                    Rating.aggregate([
                      {
                        $match: {
                          receiverId: mongoose.Types.ObjectId(
                            data.jobId
                          ),
                          category: "job",
                        },
                      },
                      {
                        $group: {
                          _id: {},
                          average: { $avg: "$rating" },
                        },
                      },
                    ])
                      .then((result) => {
                        if (result === null) {
                          res.status(400).json({
                            message:
                              "Error while calculating rating",
                          });
                          return;
                        }
                        const avg = result[0].average;
                        Job.findOneAndUpdate(
                          {
                            _id: data.jobId,
                          },
                          {
                            $set: {
                              rating: avg,
                            },
                          }
                        )
                          .then((foundJob) => {
                            if (foundJob === null) {
                              res.status(400).json({
                                message:
                                  "Error while updating job's average rating",
                              });
                              return;
                            }
                            res.json({
                              message: "Rating added successfully",
                            });
                          })
                          .catch((err) => {
                            res.status(400).json(err);
                          });
                      })
                      .catch((err) => {
                        res.status(400).json(err);
                      });
                  })
                  .catch((err) => {
                    res.status(400).json(err);
                  });
              } else {
                // you cannot rate
                res.status(400).json({
                  message:
                    "You haven't worked for this job. Hence you cannot give a rating.",
                });
              }
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        } else {
          // update the rating
          rating.rating = data.rating;
          rating
            .save()
            .then(() => {
              // get the average of ratings
              Rating.aggregate([
                {
                  $match: {
                    receiverId: mongoose.Types.ObjectId(
                      data.jobId
                    ),
                    category: "job",
                  },
                },
                {
                  $group: {
                    _id: {},
                    average: { $avg: "$rating" },
                  },
                },
              ])
                .then((result) => {
                  if (result === null) {
                    res.status(400).json({
                      message: "Error while calculating rating",
                    });
                    return;
                  }
                  const avg = result[0].average;
                  console.log(avg);

                  Job.findOneAndUpdate(
                    {
                      _id: data.jobId,
                    },
                    {
                      $set: {
                        rating: avg,
                      },
                    }
                  )
                    .then((foundJob) => {
                      if (foundJob === null) {
                        res.status(400).json({
                          message:
                            "Error while updating job's average rating",
                        });
                        return;
                      }
                      res.json({
                        message: "Rating added successfully",
                      });
                    })
                    .catch((err) => {
                      res.status(400).json(err);
                    });
                })
                .catch((err) => {
                  res.status(400).json(err);
                });
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
});

// get personal rating
router.get("/rating", jwtAuth, (req, res) => {
  const user = req.user;
  Rating.findOne({
    senderId: user._id,
    receiverId: req.query.id,
    category: user.type === "recruiter" ? "applicant" : "job",
  }).then((rating) => {
    if (rating === null) {
      res.json({
        rating: -1,
      });
      return;
    }
    res.json({
      rating: rating.rating,
    });
  });
});

// Application.findOne({
//   _id: id,
//   userId: user._id,
// })
//   .then((application) => {
//     application.status = status;
//     application
//       .save()
//       .then(() => {
//         res.json({
//           message: `Application ${status} successfully`,
//         });
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   })
//   .catch((err) => {
//     res.status(400).json(err);
//   });

// router.get("/jobs", (req, res, next) => {
//   passport.authenticate("jwt", { session: false }, function (err, user, info) {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       res.status(401).json(info);
//       return;
//     }
//   })(req, res, next);
// });

// module.exports = router;
