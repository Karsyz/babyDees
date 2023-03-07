const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a text value']
  },
  description: {
    type: String,
  },
  size: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
  },
  sku: {
    type: String,
    unique: [true, 'Existing sku exists in database already']
  },
  barcode: {
    type: Number,
    unique: [true, 'Existing barcode exists in database already']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },


}, {
  timestamps: true  
})

module.exports = mongoose.model('Product', productSchema)