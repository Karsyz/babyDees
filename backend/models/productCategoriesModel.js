const mongoose = require('mongoose')

const productCategoriesSchema = mongoose.Schema({
  categoryStdCase: {
    type: String, 
    required: [true, 'Please add a unique product category'],
    unique: [true, 'Existing product category exists in database already'],
    maxLength: 25,
  },
  categoryCamelCase: {
    type: String,
  },
  imageSrc: {
    type: String,
  },
  imageAlt: {
    type: String,
  },
  description: {
    type: String,
  }

}) 

module.exports = mongoose.model('Categories', productCategoriesSchema)