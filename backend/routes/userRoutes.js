import { Router } from "express";
import { login, signUp } from "../controllers/authController.js";

const userRouter = Router();

userRouter.post("/signup", signUp);

userRouter.post("/login", login);

export default userRouter;

// module.exports = router;
