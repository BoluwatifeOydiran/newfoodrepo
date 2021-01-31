const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.get("/login", userController.login_get);
router.post("/login", userController.login_post);
router.get("/signup", userController.signup_get);
router.post("/signup", userController.signup_post);

module.exports = router;
