const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Homepage" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

router.get("/services", (req, res) => {
  res.render("services", { title: "Services" });
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

module.exports = router;
