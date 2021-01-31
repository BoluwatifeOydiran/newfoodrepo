const { Router } = require("express");
const productControllers = require("../controllers/productController");

const router = Router();

router.get("/", productControllers.product_index_get);
router.get("/create", productControllers.create_product_get);
router.post("/create", productControllers.create_product_post);

module.exports = router;
