const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(()=>console.log('connected'))
.catch((e)=>console.log(e))

const imageSchema = new mongoose.Schema({
  productId: String,
  imageUrl: String
})

const ImageModel = mongoose.model('Image', imageSchema)

module.exports = ImageModel