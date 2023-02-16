const express = require('express');
const router = express.Router();
const PlaceController = require('../controllers/location.controller');

router.get('/', PlaceController.getPlaces);
router.post('/', PlaceController.createPlace);

module.exports = router;