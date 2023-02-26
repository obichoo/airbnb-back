const User = require('../models/user.model.js')
const Location = require('../models/location.model.js')

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.userToken.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found'
        })
      }
      res.send(user)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found'
        })
      }
      res.send(user)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

exports.deleteOneUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.send({ message: `user with id ${user._id} successfully deleted` }))
    .catch((err) => res.status(400).send(err))
}

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users)
    })
    .catch((err) => res.send(err))
}

exports.addFavouriteLocation = (req, res) => {
  User.findByIdAndUpdate(req.userToken.id, { $push: { favouriteLocations: req.params.id } }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found'
        })
      }
      res.send(user)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

exports.deleteFavouriteLocation = (req, res) => {
  User.findByIdAndUpdate(req.userToken.id, { $pull: { favouriteLocations: req.params.id } }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found'
        })
      }
      res.send(user)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

exports.getFavouriteLocations = async (req, res) => {
  try {
    const currentUser = await User.findById(req.userToken.id)
    const locationIds = currentUser.favouriteLocations
    const locations = await Location.find({ _id: { $in: locationIds } })
    res.send(locations)
  } catch (err) {
    console.error(err)
    res.status(400).send(err)
  }
}
