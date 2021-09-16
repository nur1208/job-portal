import { Router } from "express";
import {
  isJWTAuth,
  login,
  signUp,
} from "../controllers/authController.js";
import { me } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/signup", signUp);

userRouter.post("/login", login);

userRouter.route("/").get(isJWTAuth, me);

export default userRouter;

// module.exports = router;
