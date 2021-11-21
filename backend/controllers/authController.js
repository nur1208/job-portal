import jwt from "jsonwebtoken";
import { promisify } from "util";
import JobApplicant from "../db/JobApplicant.js";
import Recruiter from "../db/Recruiter.js";
import User from "../db/User.js";

export const signUp = async (req, res) => {
  try {
    const data = req.body;
    console.log({ data });

    const user = new User({
      email: data.email,
      password: data.password,
      type: data.type,
    });

    const newUser = await user.save();

    const userDetails =
      newUser.type === "recruiter"
        ? new Recruiter({
            userId: newUser._id,
            name: data.name,
            contactNumber: data.contactNumber,

            bio: data.bio,
          })
        : new JobApplicant({
            userId: newUser._id,
            name: data.name,
            education: data.education,
            usernameChatEngine: newUser.usernameChatEngine,
            skills: data.skills,
            rating: data.rating,
            resume: data.resume,
            profile: data.profile,
          });

    try {
      await userDetails.save();
      // Token
      const token = jwt.sign(
        { _id: newUser._id },
        // eslint-disable-next-line no-undef
        process.env.SECRET_KEY
      );
      res.json({
        token: token,
        type: user.type,
      });
    } catch (error) {
      await newUser.delete();
      res.status(400).json({ error, message: error.message });
    }
  } catch (error) {
    console.log({ error });

    res.status(400).json({ error, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");
    !user &&
      res
        .status(401)
        .json({ message: "Wrong password or username!" });

    const isCorrectPassword = await user.isCorrectPassword(
      password,
      user.password
    );

    !isCorrectPassword &&
      res
        .status(401)
        .json({ message: "Wrong password or username!" });

    const accessToken = jwt.sign(
      { id: user._id },
      // eslint-disable-next-line no-undef
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    // give us all the info of the user and live out the password and __v only
    // eslint-disable-next-line no-unused-vars
    const { __v, ...info } = user._doc;

    res.status(200).json({ ...info, token: accessToken });
  } catch (err) {
    res.status(500).send({ err,message: err.message });
  }
};

export const isJWTAuth = async (req, res, next) => {
  let token;
  // console.log(`here`);

  // 1 getting token and check if it's there
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token || token === "undefined") {
    res.status(401).json({
      status: "fall",
      message: "you are not logged in! Please log in to get access",
    });

    console.log({
      status: "fall",
      message: "you are not logged in! Please log in to get access",
    });

    return;
  }
  // 2 verification token
  const decode = await promisify(jwt.verify)(
    token,

    // eslint-disable-next-line no-undef
    process.env.SECRET_KEY
  );

  // 3 check if user still exists
  const currentUser = await User.findById(decode.id);
  // if the user delete after we send him a token
  // and before the token expired
  // TODO FIX THE ERROR THAT OCCURS BECAUSE THE FOLLOWING CODE
  // WHEN THE USER SIGN UP AND THEN WE AUTO LOG HIM IN
  // if (!currentUser) {
  //   res.status(401).json({
  //     status: "fall",
  //     message:
  //       "The user belonging to this token does no longer exist",
  //   });

  //   console.log({
  //     status: "fall",
  //     message:
  //       "The user belonging to this token does no longer exist",
  //   });
  // }

  console.log({ currentUser });

  // grant access to protected route
  req.user = currentUser;
  next();
};
