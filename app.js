const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogsRoutes");
const productsRoutes = require("./routes/productsRoutes");
const indexRoutes = require("./routes/indexRoutes");

// express app
const app = express();

// view engine setup
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

// connecting to mongodb gui
const connectionURL = "mongodb://127.0.0.1:27017/foodies";
mongoose
  .connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log("App listening on port 3000!");
    });
  })
  .catch((err) => console.log(err));

// Giving access to CORS platform
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Types, Accept, Authorization"
//   );
//   if ((req.method = "OPTIONS")) {
//     res.header("Access-Control-Allow-Method", "PUT, POST, GET, DELETE, PATCH");
//     return res.status(200).json({});
//   }
//   next();
// });

// middleware and static files
app.use(express.static("public/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(cookieParser());
app.use(morgan("dev"));

// routes
app.use("/", indexRoutes);
// blog routes
app.use("/blogs", blogRoutes);
// authRoutes
app.use("/users", userRoutes);
// blogToutes
app.use("/products", productsRoutes);

app.get("/set-cookies", (req, res) => {
  res.cookie("user", true, {
    maxAge: 100 * 60 * 60 * 24,
    httpOnly: true,
    // secure: true,      //only for production
  });

  res.send("Cookie is already created");
});

app.get("/read-cookie", (req, res) => {
  const cookie = req.cookies;

  console.log(cookie);
  res.send("cookie");
});

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).render("error", { title: "404 Error page" });
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
