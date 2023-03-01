const express = require('express')
const router = express.Router()
const { getProduct,
   getAllProducts,
   createProduct,
   updateProduct,
   deleteProduct,
} = require('../controllers/productController')

router.route('/')
  .get(getAllProducts)
  .post(createProduct)

router.route('/:id')
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct)

module.exports = router