const mongoose = require('mongoose');

const  typeLocationSchema = mongoose.Schema({
  name: {
    type: String,
    required:true
  }
})

module.exports = mongoose.model('typeLocation',  typeLocationSchema)