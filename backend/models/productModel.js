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
  },
  barcode: {
    type: Number,
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