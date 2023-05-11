const express = require('express')
const router = express.Router()
const { getAllCategories, createCategory, } = require('../controllers/productCategoriesController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
  .get(getAllCategories)
  .post(protect, createCategory)

module.exports = router