const router = require('express').Router();

const userRoutes = require('./userRoute');
const postRoutes = require('./postRoute');
const commentRoutes = require('./commentRoute');
const deleteRoutes = require('./deleteRoute'); // Import the new delete route

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/delete', deleteRoutes); // Use the correct path for your delete route

module.exports = router;