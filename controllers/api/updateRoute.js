const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');

// Route to update a post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the post by ID
    const post = await Post.findByPk(postId);

    if (!post) {
      res.status(404).json({ message: 'Post not found.' });
      return;
    }

    // Ensure that only the post owner can update the post
    if (post.user_id !== req.session.user_id) {
      res.status(403).json({ message: 'You are not authorized to update this post.' });
      return;
    }

    // Update the post's title and content
    await Post.update(
      {
        title: req.body.title,
        contents: req.body.content,
      },
      {
        where: { id: postId },
      }
    );

    res.status(200).json({ message: 'Post updated successfully.' });
  } catch (err) {
    console.error('Error updating post:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;