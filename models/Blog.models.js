const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      required: true,
      type: String,
    },
    // blogImage: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
