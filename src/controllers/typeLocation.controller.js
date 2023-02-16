const typeLocation = require('../models/typeLocation.js')

exports.createtypeLocation = (req, res) => {
  const newTypeLocation = new typeLocation({
    name: req.body.name
  })
  new typeLocation.save().then((typeLocation) => res.send(typeLocation)).catch((err) => res.status(400).send(err))
}

exports.getTypesPlace = (req, res) => {
  typeLocation
    .find()
    .then((typeLocation) => {
      res.send(typeLocation)
    })
    .catch((err) => res.status(400).send(err))
}
