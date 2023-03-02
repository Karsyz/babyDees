const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')

//  @desc   Get all products
//  @route  GET /api/products
//  @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find() 

  res.status(200).json(products)
})

//  @desc   Get one product
//  @route  GET /api/products/:id
//  @access Public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if(!product) {
    res.status(400)
    throw new Error('Product not found')
  }
  res.status(200).json(product)
})


//  @desc   Create a product
//  @route  POST /api/products
//  @access Private
const createProduct = asyncHandler(async (req, res) => {
  if(!req.body.name) {
    res.status(400)
    throw new Error('Please add a name field')
  }
  const product = await Product.create({
    name: req.body.name
  })
  res.status(200).json(product)
})


//  @desc   Update a product
//  @route  PUT /api/products/:id
//  @access Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if(!product) {
    res.status(400)
    throw new Error('Product not found')
  }
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, })
  res.status(200).json(updatedProduct)
})


//  @desc   Delete a product
//  @route  GET /api/product/:id
//  @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  console.log(product)

  if(!product) {
    res.status(400)
    throw new Error('Product not found')
  }

  await product.deleteOne()

  res.status(200).json({ id: req.params.id })
})



module.exports = {
  getProduct,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}
