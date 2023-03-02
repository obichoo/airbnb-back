const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  },
  travellers: {
    type: Number,
    required: true
  },
  arriveDate: {
    type: Date,
    required: true
  },
  leaveDate: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Book', bookSchema)
