const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');

// Route to delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the post by ID
    const post = await Post.findByPk(postId);

    if (!post) {
      res.status(404).json({ message: 'Post not found.' });
      return;
    }

    // Ensure that only the post owner can delete the post
    if (post.user_id !== req.session.user_id) {
      res.status(403).json({ message: 'You are not authorized to delete this post.' });
      return;
    }

    // Delete the post
    await post.destroy();

    res.status(204).end();
  } catch (err) {
    console.error('Error deleting post:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;