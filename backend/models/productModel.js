const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a text value']
  }
}, {
  timestamps: true  
})

module.exports = mongoose.model('Product', productSchema)