const mongoose = require("Mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
    lowercase: true,
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    // validate: [isEmail, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Pass word min-length is 6"],
  },
});

adminSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const Admin = mongoose.model("user", adminSchema);

module.exports = Admin;
