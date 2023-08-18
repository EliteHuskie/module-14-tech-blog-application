const router = require('express').Router();

const userRoutes = require('./userRoute');
const postRoutes = require('./postRoute');
const commentRoutes = require('./commentRoute');
const deleteRoutes = require('./deleteRoute'); 

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/delete', deleteRoutes);

module.exports = router;