const router = require('express').Router();

const userRoutes = require('./userRoute');
const postRoutes = require('./postRoute'); // Adjust the path based on your project structure

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;