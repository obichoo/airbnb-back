const express = require('express');
const router = express.Router();
const LocationController = require('../controllers/location.controller');

router.get('/', LocationController.getLocations);
router.get('/:id', LocationController.getLocationById);
router.post('/', LocationController.createLocation);
router.put('/', LocationController.updateLocation);

module.exports = router;