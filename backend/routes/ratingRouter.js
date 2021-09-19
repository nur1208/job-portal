import { Router } from "express";
import { isJWTAuth } from "../controllers/authController.js";
import {
  addUpdateRating,
  getPersonalRating,
} from "../controllers/ratingController.js";

const ratingRouter = Router();

ratingRouter.use(isJWTAuth);

ratingRouter
  .route("rating")
  .put(addUpdateRating)
  .get(getPersonalRating);

export default ratingRouter;
