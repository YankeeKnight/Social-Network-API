const router = require('express').Router();

const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtRoutes');

router.use('/users', usersRoutes);

router.use('/thoughts', thoughtsRoutes);

module.exports = router;