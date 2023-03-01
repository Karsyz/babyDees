const asyncHandler = require('express-async-handler')

//  @desc   Get all products
//  @route  GET /api/products
//  @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get all Products' })
})

//  @desc   Get one product
//  @route  GET /api/products/:id
//  @access Public
const getProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get product ${req.params.id}`})
})


//  @desc   Create a product
//  @route  POST /api/products
//  @access Private
const createProduct = asyncHandler(async (req, res) => {
  if(!req.body.name) {
    res.status(400)
    throw new Error('Please add a name field')
  }else { 
  }
  
  res.status(200).json({ message: 'Create a Product' })
})


//  @desc   Update a product
//  @route  PUT /api/products/:id
//  @access Private
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update product ${req.params.id}`})
})


//  @desc   Delete a product
//  @route  GET /api/product/:id
//  @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete product ${req.params.id}`})
})



module.exports = {
  getProduct,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}
