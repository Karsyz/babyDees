const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  isCustomer: {
    type: Boolean,
    required: true
  },
  emailSubscriber: {
    type: Boolean,
    required: true
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  txtOk: {
    type: Boolean,
    require: true,
  },
  address1: {
    type: String,
    require: true,
  },
  address2: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  province: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  postCode: {
    type: String,
    require: true,
  },


}, {
  timestamps: true  
})

module.exports = mongoose.model('Product', addressSchema)