const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const locationRouter = require('./location.route');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/locations', locationRouter);

module.exports = router;