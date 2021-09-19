import express from "express";
import { isJWTAuth } from "../controllers/authController.js";
import {
  applyForJob,
  createJob,
  deleteJob,
  getAllJobApplications,
  getAllJobs,
  getAllApplications,
  updateApplications,
} from "../controllers/jobController.js";

const jobRouter = express.Router();

// only logged in user can access the following routes.
jobRouter.use(isJWTAuth);

jobRouter
  .route("/")
  .post(createJob)
  // TODO make one for everybody
  .get(getAllJobs);

jobRouter.route("/:id").delete(deleteJob);

// TODO  refactor applications routes
jobRouter
  .route("/:id/applications")
  .post(applyForJob)
  .get(getAllJobApplications);

jobRouter.route("/applications").get(getAllApplications);

jobRouter.route("/applications/:id").put(updateApplications);

export default jobRouter;
