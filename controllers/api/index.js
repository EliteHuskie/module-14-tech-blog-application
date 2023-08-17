const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes'); // Adjust the path based on your project structure

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;