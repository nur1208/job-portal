import express from "express";
import { isJWTAuth } from "../controllers/authController.js";
import {
  createJob,
  deleteJob,
  getAllJobs,
} from "../controllers/jobController.js";

const jobRouter = express.Router();

jobRouter
  .route("/")
  .post(isJWTAuth, createJob)
  // TODO make one for everybody
  .get(isJWTAuth, getAllJobs);

jobRouter.route("/:id").delete(isJWTAuth, deleteJob);

export default jobRouter;
