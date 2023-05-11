const express = require('express')
const router = express.Router()
const { 
  getImage,
  getAllImages,
  createImage,
  updateImageAlt,
  deleteImage 
} = require('../controllers/imageController')
const { protect } = require('../middleware/authMiddleware')
const upload = require("../middleware/multer")

router.route('/')
  .get(getAllImages)
  .post(protect, upload.single("file"), createImage)

router.route('/:id')
  .get(getImage)
  .put(protect, updateImageAlt)
  .delete(protect, deleteImage)

module.exports = router