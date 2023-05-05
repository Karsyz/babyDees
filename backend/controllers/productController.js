const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')
const User = require('../models/userModel')


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


//  @desc   Get all products in category
//  @route  GET /api/products/category
//  @access Public
const getAllProductsInCategory = asyncHandler(async (req, res) => {
  const product = await Product.find( { category: req.params.category } )
  if(!product) {
    res.status(400)
    throw new Error('No products in category')
  }
  res.status(200).json(product)
})

//  @desc   Create a product
//  @route  POST /api/products
//  @access Private
const createProduct = asyncHandler(async (req, res) => {
  const { category, name, price, description, rating, reviewCount, reviews, colors, sizes, type, details, options, images, sku, barcode } = req.body
  
  // verify minimum of fields present
  if(!category || !name || !price || !description ) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  
  // Get current user
  const user = await User.findById(req.user.id)
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Set productNumber for category  ex: {category}{productNumber}: quilts0231
  // get highest productNumber in category and add one if category exists else 1
  let productNumber
  const categoryExists = await Product.findOne( { category: category } )
  if ( categoryExists ) {
    let maxCatProdNum = await Product.find( { category: category } ).sort( { productNumber: -1} ).limit(1)
    productNumber = maxCatProdNum[0].productNumber + 1
  }else {
    productNumber = 1
  }

  // Create new product 
  const product = await Product.create({
    category: category,
    productNumber: productNumber,
    name: name,
    price: price,
    description: description,
    rating: rating,
    reviewCount: reviewCount,
    reviews: reviews,
    colors: colors,
    sizes: sizes,
    type: type,
    details: details,
    options: options,
    images: images,
    sku: sku,
    barcode: barcode,
    createdBy: user.id
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
  getAllProductsInCategory,
  createProduct,
  updateProduct,
  deleteProduct,

}
