import mongoose from "mongoose";
// TODO user ref for userId
const schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      validate: {
        validator: function (v) {
          return v !== "" ? /\+\d{1,3}\d{10}/.test(v) : true;
        },
        msg: "Phone number is invalid!",
      },
    },
    bio: String,
  },
  { collation: { locale: "en" } }
);

const Recruiter = mongoose.model("Recruiter", schema);

export default Recruiter;
