const express = require('express')
const router = express.Router()
const { getCatalog
} = require('../controllers/quickstartController')


router.route('/')
  .get(getCatalog)


module.exports = router