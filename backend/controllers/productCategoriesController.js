const asyncHandler = require('express-async-handler')
const Categories = require('../models/productCategoriesModel')

//  @desc   Get all products categories
//  @route  GET /api/products/categories
//  @access Public
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Categories.find()
  res.status(200).json(categories)
})


//  @desc   Create a product category
//  @route  POST /api/products/categories
//  @access Private
const createCategory = asyncHandler(async (req, res) => {
  const { categoryStdCase, imageSrc, imageAlt, description } = req.body
  console.log(imageSrc)
  // verify minimum of fields present
  if(!categoryStdCase) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Create new product category
  const categories = await Categories.create({
    categoryStdCase: categoryStdCase,
    categoryCamelCase: toCamelCase(categoryStdCase),
    imageSrc: imageSrc,
    imageAlt: imageAlt,
    description: description
  })
  res.status(200).json(categories)
})

  // convert Standard Case to camelCase
  const toCamelCase = (words) => {
    const wordsArr = words.toLowerCase().split(' ')
    for (i = 0; i < wordsArr.length; i++) {
      if (i !== 0) {
        const firstLetter = wordsArr[i].slice(0, 1).toUpperCase()
        const lastLetters = wordsArr[i].slice(1).toLowerCase()
        wordsArr.splice(i, 1, firstLetter + lastLetters)
      }
    }
    return wordsArr.join('')
  }

module.exports = {
  getAllCategories,
  createCategory,
  toCamelCase,
}