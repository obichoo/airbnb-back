const express = require('express');
const router = express.Router();
const  typeLocationController = require('../controllers/typeLocation.controller');

router.get('/',  typeLocationController.getTypesPlace);
router.post('/',  typeLocationController.createtypeLocation);

module.exports = router;