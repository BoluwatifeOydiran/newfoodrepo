const User = require("../models/UserSignup");

const errorHandling = (err) => {
  // console.log(err.message, err.code);

  let errors = {
    firstname: " ",
    lastname: " ",
    email: " ",
    password: " ",
    cpass: " ",
  };

  if (err.code === 11000) {
    errors.email = "this email is already registered";
    return errors;
  }

  if (password !== cpass) {
    errors.cpass = "Password does not match";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach((properties) => {
      errors[properties.path] = properties.message;
    });
    return errors;
  }
};

const login_get = (req, res) => {
  res.render("login", { title: "Log in" });
};

const signup_get = (req, res) => {
  res.render("signup", { title: "Sign up" });
};

const login_post = (req, res) => {
  res.render("login", { title: "Sign up" });
};

const signup_post = async (req, res) => {
  // const { firstname, lastname, email, password, cpass } = req.body;

  try {
    if (password === cpass) {
      const user = await User.create(
        //   {
        //   firstname,
        //   lastname,
        //   email,
        //   password,
        // }
        req.body
      );
      res.json(user);
      console.log(user);
    } else {
      console.log("Error cannot create user");
      res.send("User not created");
    }
  } catch (err) {
    const errors = errorHandling(err);
    res.status(400).json({ errors });
  }
};

module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
};
0;
