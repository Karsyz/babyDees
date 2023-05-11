const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
  imageSrc: {
    type: String,
    require: [true, 'Please add an image URL'],
  },
  imageAlt: {
    type: String,
    require: [true, 'Please add an alt tag for the image'],
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
},{
  timestamps: true  
})

module.exports = mongoose.model('Image', imageSchema)