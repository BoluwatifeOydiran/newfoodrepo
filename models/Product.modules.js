const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  productImage: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
