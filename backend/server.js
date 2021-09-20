import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { existsSync, mkdirSync } from "fs";
import userRouter from "./routes/userRoutes.js";
import jobRouter from "./routes/jobRouter.js";
import ratingRouter from "./routes/ratingRouter.js";

dotenv.config();

// MongoDB
mongoose
  // eslint-disable-next-line no-undef
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// initializing directories
if (!existsSync("./public")) {
  mkdirSync("./public");
}
if (!existsSync("./public/resume")) {
  mkdirSync("./public/resume");
}
if (!existsSync("./public/profile")) {
  mkdirSync("./public/profile");
}

const app = express();
const port = 5050;
// TODO connect to that database then start the server.
app.use(morgan("dev"));
app.use(express.json()); // support json encoded bodies
// app.use(express.urlencoded({ extended: true })); // support encoded bodies

// Setting up middlewares
app.use(cors("http://localhost:3001"));
app.use(express.static("public"));
// app.use(initialize());

// Routing
app.use("/api/v1/users", userRouter);
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/ratings", ratingRouter);
// app.use("/api", require("./routes/apiRoutes"));
// app.use("/upload", require("./routes/uploadRoutes"));
// app.use("/host", require("./routes/downloadRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
