const User = require('../models/user.model.js')
const Location = require('../models/location.model.js')
const bcrypt = require('bcrypt')

exports.updateUser = (req, res) => {
  User.findById(req.userToken.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'Utilisateur non trouvé'
        })
      }

      if (req.body.password && bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(405).send({
          message: "Le mot de passe est identique à l'ancien"
        })
      } else if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
      }

      User.findByIdAndUpdate(user.id, req.body, { new: true })
        .then((user) => {
          res.send(user)
        })
        .catch((err) => {
          res.status(500).send({
            error: 'email_exists',
            message: 'Cet email est déjà utilisé'
          })
        })
    })
    .catch((err) => {
      res.status(500).send({
        err
      })
    })
}

exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'Utilisateur non trouvé'
        })
      }
      res.send(user)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.send({ message: 'Utilisateur supprimé' }))
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
          message: 'Utilisateur non trouvé'
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
