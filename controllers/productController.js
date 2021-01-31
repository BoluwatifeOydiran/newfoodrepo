const Product = require("../models/Product.modules");

const product_index_get = (req, res) => {
  Product.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("product/shop", { title: "Our Products", products: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const create_product_get = (req, res) => {
  res.render("./admin/create-product");
};

const create_product_post = async (req, res) => {
  const { name, price, productImage } = req.body;

  try {
    const product = await Product.create({
      name,
      price,
      productImage,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(404).send("erreor, product cannot be created");
    console.log(error);
  }
};

module.exports = {
  product_index_get,
  create_product_get,
  create_product_post,
};
