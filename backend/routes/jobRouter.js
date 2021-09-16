import express from "express";
import { isJWTAuth } from "../controllers/authController.js";
import { createJob } from "../controllers/jobController.js";

const jobRouter = express.Router();

jobRouter.route("/").post(isJWTAuth, createJob);

export default jobRouter;
