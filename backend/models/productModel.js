const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Please add a text value'],
  },
  productNumber: {
    type: Number,
    // required: [true, 'Please add a unique productNumber'],
    // unique: [true, 'Existing product number exists in database already'],
  },
  name: {
    type: String,
    required: [true, 'Please add a text value'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a text value'],
  },
  description: {
    type: String,
    required: [true, 'Please add a text value'],
  },
  rating: {
    type: Number,
  },
  reviewCount: {
    type: Number,
  },
  reviews: {
    type: Array,
  },
  colors: {
    type: Array,
  },
  sizes: {
    type: Array,
  },
  type: {
    type: String,
  },
  details: {
    type: Array,
  },
  options: {
    type: Array,
  },
  images: {
    type: Array,
  },
  sku: {
    type: String,
    // unique: [true, 'Existing sku exists in database already'],
  },
  barcode: {
    type: Number,
    // unique: [true, 'Existing barcode exists in database already'],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, {
  timestamps: true  
})

module.exports = mongoose.model('Product', productSchema)