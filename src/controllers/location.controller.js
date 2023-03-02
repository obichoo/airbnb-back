const Location = require('../models/location.model')

exports.createLocation = (req, res) => {
  req.body.authorId = req.userToken.id
  req.body.rate = 5
  Location.create(req.body)
    .then((location) => {
      res.send(location)
    })
    .catch((err) => res.status(400).send(err))
}

exports.updateLocation = (req, res) => {
  Location.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((location) => {
      if (!location) {
        return res.status(404).send({
          message: 'Location non trouvée'
        })
      }
      res.send(location)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

exports.getLocations = (req, res) => {
  Location.find()
    .then((locations) => {
      res.send(locations)
    })
    .catch((err) => res.status(400).send(err))
}

exports.getLocationById = (req, res) => {
  Location.findById(req.params.id)
    .then((locations) => {
      res.send(locations)
    })
    .catch((err) => res.status(400).send(err))
}

exports.getMyLocations = (req, res) => {
  Location.find({ authorId: req.userToken.id })
    .then((locations) => {
      res.send(locations)
    })
    .catch((err) => res.status(400).send(err))
}
