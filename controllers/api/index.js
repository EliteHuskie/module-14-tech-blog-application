const router = require('express').Router();

const userRoutes = require('./userRoute');
const postRoutes = require('./postRoute');
const commentRoutes = require('./commentRoute'); // Import comment routes

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes); // Use the correct path for comments

module.exports = router;