const router = require('express').Router();

const userRoutes = require('./userRoute');
const postRoutes = require('./postRoute');
const commentRoutes = require('./commentRoute');
const deleteRoutes = require('./deleteRoute'); 
const updateRoutes = require('./updateRoute'); 

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/delete', deleteRoutes);
router.use('/update', updateRoutes); 

module.exports = router;