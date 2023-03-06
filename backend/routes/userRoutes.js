const express = require('express')
const router = express.Router()
const { getAllUsers,
   createUser,
   updateUser,
   deleteUser,
   registerUser,
   loginUser,
   getMe,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
  // .get(getAllUsers)
  .post(registerUser)

// router.route('/:id')
//   .put(updateUser)
//   .delete(deleteUser)

router.post('/login', loginUser)

router.get('/me', protect, getMe)

module.exports = router