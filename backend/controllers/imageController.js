const asyncHandler = require('express-async-handler')
const Image = require('../models/imageModel')
const cloudinary = require("../middleware/cloudinary");


//  @desc   Get image
//  @route  GET /api/images/:id
//  @access Public
const getImage = asyncHandler(async (req, res) => {
  const images = await Image.find({ _id: req.params.id })
  res.status(200).json(images)
})


//  @desc   Get all images
//  @route  GET /api/images
//  @access Public
const getAllImages = asyncHandler(async (req, res) => {
  const images = await Image.find()
  res.status(200).json(images)
})


//  @desc   Create Image
//  @route  POST /api/images
//  @access Private
const createImage = asyncHandler(async (req, res) => {
  const { imageAlt } = req.body
  const { path } = req.file

  try {
    // verify minimum of fields present
    if (!imageAlt) {
      res.status(400)
      throw new Error('Please add all fields')
    }

    // Upload new image to cloudinary
    const result = await cloudinary.uploader
      .upload(path, {
        width: 800,
        height: 800,
        crop: "fill",
        folder: "babyDeesProductImages"
      })

    // Create new image
    const image = await Image.create({
      imageSrc: result.secure_url,
      imageAlt: imageAlt,
      cloudinaryId: result.public_id,
    })
    res.status(200).json(image)

  } catch (err) {
    console.log(err);
  }
})


//  @desc   Update Image Alt Text (Description)
//  @route  GET /api/images/:id
//  @access Private
const updateImageAlt = asyncHandler(async (req, res) => {
  const { imageAlt } = req.body

  // verify minimum of fields present
  if (!imageAlt) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Update Db
  const image = await Image.findOneAndUpdate({ _id: req.params.id }, { imageAlt: imageAlt })

  res.status(200).json(image)
})


//  @desc   Delete Image
//  @route  GET /api/images/:id
//  @access Private
const deleteImage = asyncHandler(async (req, res) => {
  try {
    // Get existing image object
    const existingImage = await Image.findOne( { _id: req.params.id } )
    if(!existingImage) {
      res.status(400)
      throw new Error('Image not found')
    }

    // Delete existing image from cloudinary
    await cloudinary.uploader.destroy(existingImage.cloudinaryId);

    // Delete image from DB  
    await Image.deleteOne({ _id: req.params.id });
    res.status(200).send('Image Deleted')

  } catch (err) {
    console.log(err);
  }
})


module.exports = {
  getImage,
  getAllImages,
  createImage,
  updateImageAlt,
  deleteImage,
}