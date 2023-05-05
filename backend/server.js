const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
require('./config/bigInt')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products/categories', require('./routes/productCategoriesRoutes'))
app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/quickstart', require('./routes/quickstartRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`)) 