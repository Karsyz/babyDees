const mongoose = require('mongoose')

const productCategoriesSchema = mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Please add a unique product category'],
    unique: [true, 'Existing product category exists in database already'],
  },
}) 

module.exports = mongoose.model('Categories', productCategoriesSchema)