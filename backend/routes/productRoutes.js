const express = require('express')
const router = express.Router()
const { getProduct,
   getAllProducts,
   getAllProductsInCategory,
   createProduct,
   updateProduct,
   deleteProduct,
} = require('../controllers/productController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
  .get(getAllProducts)
  .post(protect, createProduct)

router.route('/:category')
  .get(getAllProductsInCategory)
  
router.route('/categories/:category/:prodNum')
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct)


module.exports = router