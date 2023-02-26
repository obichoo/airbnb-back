const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
  imgs: {
    type: Array,
    required: true,
    minLength: 5
  },
  location: {
    type: String,
    required: true,
    minLength: 5
  },
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50
  },
  rate: {
    type: Number,
    required: false
  },
  target: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  },
  serviceCharge: {
    type: Number,
    required: true
  },
  caracteristics: {
    travellers: {
      type: Number,
      required: true
    },
    rooms: {
      type: Number,
      required: true
    },
    beds: {
      type: Number,
      required: true
    },
    bathrooms: {
      type: Number,
      required: true
    }
  },
  description: {
    type: String,
    required: true,
    minLength: 5
  },
})

module.exports = mongoose.model('Location', locationSchema)
