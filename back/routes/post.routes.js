const { addPost, allPost } = require("../controllers/post.controller");

const router = require("express").Router();

router.post("/", addPost);
router.get("/", allPost);

module.exports = router;
