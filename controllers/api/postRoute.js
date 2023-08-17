const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');

// Route to create a new post
router.post('/create-post', withAuth, async (req, res) => {
  try {
    // Create a new post in the database
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;