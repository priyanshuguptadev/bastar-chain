require('dotenv').config()

const express = require('express')
const productRouter = require('./routes/product')
const cors = require('cors')



const app = express()
app.use(cors())

app.use(express.json())

app.use('/', productRouter)


app.listen(3000, ()=>console.log('listening at port 3000'))

module.exports = app
