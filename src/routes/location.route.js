const express = require('express');
const router = express.Router();
const LocationController = require('../controllers/location.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyOwner = require('../middlewares/verifyOwner');

router.get('/', LocationController.getLocations);
router.get('/user', verifyToken, LocationController.getMyLocations);
router.get('/:id', LocationController.getLocationById);
router.post('/', verifyToken, verifyOwner, LocationController.createLocation);
router.put('/', verifyToken, LocationController.updateLocation);

module.exports = router;