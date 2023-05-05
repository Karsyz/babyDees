const express = require('express')
const router = express.Router()
const { getAllProductCategories, createCategory, } = require('../controllers/productCategoriesController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
  .get(getAllProductCategories)
  .post(protect, createCategory)

module.exports = router