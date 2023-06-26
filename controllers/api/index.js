const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;