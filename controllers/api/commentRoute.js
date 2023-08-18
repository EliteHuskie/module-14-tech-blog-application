const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

// Route to create a new comment
router.post('/create-comment', withAuth, async (req, res) => {
  try {
    // Create a new comment in the database
    const newComment = await Comment.create({
      contents: req.body.comment,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
      date_created: new Date().toISOString(), 
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;