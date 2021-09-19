import { Router } from "express";
import {
  isJWTAuth,
  login,
  signUp,
} from "../controllers/authController.js";
import {
  getAllApplicants,
  getUser,
  me,
  updateUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/signup", signUp);

userRouter.post("/login", login);

// all the routes after this for only authenticated users
userRouter.use(isJWTAuth);

userRouter.route("/").get(me).put(updateUser);

userRouter.route("/applicants").get(getAllApplicants);

userRouter.route("/:id").get(getUser);

export default userRouter;

// module.exports = router;
