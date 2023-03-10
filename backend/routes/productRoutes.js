const express = require('express')
const router = express.Router()
const { getProduct,
   getAllProducts,
   createProduct,
   updateProduct,
   deleteProduct,
} = require('../controllers/productController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
  .get(getAllProducts)
  .post(protect, createProduct)

router.route('/:id')
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct)

module.exports = router