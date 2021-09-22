import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "mongoose-type-email";

let schema = new mongoose.Schema(
  {
    email: {
      type: mongoose.SchemaTypes.Email,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    type: {
      type: String,
      enum: ["recruiter", "applicant"],
      required: true,
    },
    usernameChatEngine: String,
  },
  { collation: { locale: "en" } }
);

// Password hashing
schema.pre("save", function (next) {
  const user = this;

  // if the data is not modified
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.hash(user.password, 12, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

// add usernameChatEngine filed
schema.pre("save", function (next) {
  const user = this;
  const { email, _id } = user;
  const lastFourDight = _id
    .toString()
    .substr(_id.toString().length - 4);
  const name = email.substr(0, email.indexOf("@"));

  user.usernameChatEngine = `${name}${lastFourDight}`;

  next();
});

// Password verification upon login
// schema.methods.login = function (password) {
//   let user = this;

//   return new Promise((resolve, reject) => {
//     bcrypt.compare(password, user.password, (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       if (result) {
//         resolve();
//       } else {
//         reject();
//       }
//     });
//   });
// };

schema.methods.isCorrectPassword = async function (
  enteredPassword,
  hashedPassword
) {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

const User = mongoose.model("User", schema);

export default User;
