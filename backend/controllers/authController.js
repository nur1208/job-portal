import jwt from "jsonwebtoken";
import JobApplicant from "../db/JobApplicant.js";
import Recruiter from "../db/Recruiter.js";
import User from "../db/User.js";

export const signUp = async (req, res) => {
  try {
    const data = req.body;

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
      res.status(400).json(error);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });

  try {
    const user = await User.findOne({ email }).select("+password");
    !user && res.status(401).json("Wrong password or username!");

    console.log({ user });

    const isCorrectPassword = await user.isCorrectPassword(
      password,
      user.password
    );

    console.log({ isCorrectPassword });

    !isCorrectPassword &&
      res.status(401).json("Wrong password or username!");

    const accessToken = jwt.sign(
      { id: user._id },
      // eslint-disable-next-line no-undef
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    // give us all the info of the user and live out the password and __v only
    // eslint-disable-next-line no-unused-vars
    const { __v, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).send({ err });
  }
};
