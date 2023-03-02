const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book.controller')
const verifyOwner = require('../middlewares/verifyOwner')
const verifyToken = require('../middlewares/verifyToken')
const verifyAdmin = require('../middlewares/verifyAdmin')

router.post('/', verifyToken, verifyOwner, bookController.bookLocation)
router.get('/user', verifyToken, bookController.getMyBookings)
router.get('/', verifyToken, verifyAdmin, bookController.getBookings)
router.delete('/:id', verifyToken, bookController.deleteMyBooking)

module.exports = router
