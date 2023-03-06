const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

//  @desc   Register a User
//  @route  POST /api/Users
//  @access Private
const registerUser = asyncHandler(async (req, res) => {

  // Verify data from body exists
  const { name, email, password, isAdmin, isCustomer, isEmailSubscriber } = req.body
  if(!name || !email || !password || !isAdmin || !isCustomer || !isEmailSubscriber) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user aready exists in db
  const userExists = await User.findOne({email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user db object
    const user = await User.create({
    name: name,
    email: email,
    password: hashedPassword,  
    isAdmin: isAdmin,
    isCustomer: isCustomer,
    isEmailSubscriber: isEmailSubscriber,
  })

  // Return user info json if created successfully else throw error
  if(user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),  
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }

})

//  @desc   Login User
//  @route  GET /api/Users
//  @access Private
const loginUser = asyncHandler(async (req, res) => {

  // Get email and password from form
  const { email, password } = req.body

  // Get user from db
  const user = await User.findOne({email})

  // Verify password and return user info json if successful else throw error
  if(user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),  
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }

})

//  @desc   Get user data
//  @route  GET /api/Users/me
//  @access Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    name,
    email,
  })
})




//  @desc   Get all Users
//  @route  GET /api/Users
//  @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const Users = await User.find() 
  res.status(200).json(Users)
})

//  @desc   Create a User
//  @route  POST /api/Users
//  @access Private
const createUser = asyncHandler(async (req, res) => {
  if(!req.body.name) {
    res.status(400)
    throw new Error('Please add a name field')
  }
  const User = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password, 
    isAdmin: req.body.isAdmin,
    isCustomer: req.body.isCustomer,
    emailSubscriber: req.body.emailSubscriber,
  })
  res.status(200).json(User)
})


//  @desc   Update a User
//  @route  PUT /api/Users/:id
//  @access Private
const updateUser = asyncHandler(async (req, res) => {
  const User = await User.findById(req.params.id)
  if(!User) {
    res.status(400)
    throw new Error('User not found')
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, })
  res.status(200).json(updatedUser)
})


//  @desc   Delete a User
//  @route  GET /api/User/:id
//  @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const User = await User.findById(req.params.id)
  console.log(User)
  if(!User) {
    res.status(400)
    throw new Error('User not found')
  }
  await User.deleteOne()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
}





const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])