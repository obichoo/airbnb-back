const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const verifyToken = require('../middlewares/verifyToken')
const verifyAdmin = require('../middlewares/verifyAdmin')

router.get('/', verifyToken, verifyAdmin, userController.getUsers)
router.get('/:id', userController.getUserById)
router.get('/favourites/all', verifyToken, userController.getFavouriteLocations)
router.post('/favourites/:id', verifyToken, userController.addFavouriteLocation)
router.delete('/favourites/:id', verifyToken, userController.deleteFavouriteLocation)
router.put('/', verifyToken, userController.updateUser)
router.delete('/:id', verifyToken, verifyAdmin, userController.deleteUser)

module.exports = router
