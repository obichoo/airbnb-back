const express = require('express');
const router = express.Router();
const LocationController = require('../controllers/location.controller');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', LocationController.getLocations);
router.get('/user', verifyToken, LocationController.getMyLocations);
router.get('/:id', LocationController.getLocationById);
router.post('/', verifyToken, LocationController.createLocation);
router.put('/', verifyToken, LocationController.updateLocation);

module.exports = router;