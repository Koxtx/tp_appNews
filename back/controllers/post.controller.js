const Post = require("../models/Post");

const addPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

const allPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addPost, allPost };
