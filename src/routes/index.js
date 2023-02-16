const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const  typeLocationRouter = require('./typeLocation.route');
const placeRouter = require('./location.route');

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/type-location',  typeLocationRouter);
router.use('/location', placeRouter);

module.exports = router;