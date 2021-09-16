import express from "express";
import { isJWTAuth } from "../controllers/authController.js";
import {
  createJob,
  getAllJobs,
} from "../controllers/jobController.js";

const jobRouter = express.Router();

jobRouter
  .route("/")
  .post(isJWTAuth, createJob)
  .get(isJWTAuth, getAllJobs);

export default jobRouter;
