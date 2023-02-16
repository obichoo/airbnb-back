const Place = require('../models/location.model');

exports.createPlace = (req, res) => {

  Place.create(req.body).then(
    (location) => {
      console.log(location._id);
      // $set
      // const user = User.findById(req.userToken.id);
      // user.places.push(location._id);
      // user.save();
      res.send(location)
    }
  )
    .catch(err => res.status(400).send(err));
}

exports.getPlaces = (req, res) => {
  Place.find().populate('owner').then(
    (places) => res.send(places)
    .catch(err => res.status(400).send(err)))
}

exports.getMyPlaces = (req, res) => {
  User.findById(req.userToken.id).populate('places').then(
    (user) => {
      res.send(user.places);
    }
  )
}