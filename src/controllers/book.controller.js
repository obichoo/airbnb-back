const Book = require('../models/book.model')

exports.bookLocation = (req, res) => {
  const book = new Book({
    customerId: req.userToken.id,
    locationId: req.body.locationId,
    travellers: req.body.travellers,
    arriveDate: req.body.arriveDate,
    leaveDate: req.body.leaveDate,
    price: req.body.price
  })
  book
    .save()
    .then((book) => {
      res.send(book)
    })
    .catch((err) => res.status(400).send(err))
}

exports.getMyBookings = (req, res) => {
  Book.find({ customerId: req.userToken.id })
    .populate('locationId')
    .then((books) => {
      res.send(books)
    })
    .catch((err) => res.status(400).send(err))
}

exports.deleteMyBooking = (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: 'Réservation non trouvée'
        })
      }
      res.send(book)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

exports.getBookings = (req, res) => {
  Book.find()
    .populate('customerId')
    .populate('locationId')
    .then((books) => {
      res.send(books)
    })
    .catch((err) => res.status(400).send(err))
}
