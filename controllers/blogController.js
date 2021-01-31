const Blog = require("../models/Blog.models");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blog/blogs", { title: "Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
};

const blog_create_get = (req, res) => {
  res.render("admin/create-blog", { title: "Blogs > Create" });
};

const blog_create_post = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.redirect("/blogs");
  } catch (error) {
    console.log(error);
    res.status(404).send("blog not created");
  }
};

const single_blog_get = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("blog/single-blog", { title: result.title, blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const single_blog_delete = (req, res) => {
  res.render("blog/single-blog");
};
const single_blog_patch = (req, res) => {
  res.render("blog/single-blog");
};

module.exports = {
  single_blog_get,
  single_blog_delete,
  single_blog_patch,
  blog_index,
  blog_create_get,
  blog_create_post,
};
