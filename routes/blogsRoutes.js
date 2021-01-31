const { Router } = require("express");
const blogController = require("../controllers/blogController");

const router = Router();

router.get("/", blogController.blog_index);
router.get("/create", blogController.blog_create_get);
router.post("/create", blogController.blog_create_post);
router.get("/:id", blogController.single_blog_get);

module.exports = router;
