import mongoose from "mongoose";
const { schema } = mongoose;

const user = new schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
});

const signup = mongoose.model("signup",user);

module.exports = signup;