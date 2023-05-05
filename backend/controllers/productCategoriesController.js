const asyncHandler = require('express-async-handler')
const Categories = require('../models/productCategoriesModel')



//  @desc   Get all products categories
//  @route  GET /api/products/categories
//  @access Public
const getAllProductCategories = asyncHandler(async (req, res) => {
  const categories = await Categories.find() 
  res.status(200).json(categories)
})


//  @desc   Create a product category
//  @route  POST /api/products/categories
//  @access Private
const createCategory = asyncHandler(async (req, res) => {
  const { category } = req.body
  
  // verify minimum of fields present
  if(!category ) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  
  // Create new product category
  const categories = await Categories.create({
    category: category,
  })
  res.status(200).json(categories)
})

module.exports = {
  getAllProductCategories,
  createCategory,
}