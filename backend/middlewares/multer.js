const cloudinary = require('cloudinary').v2;

const multer = require('multer')
const {CloudinaryStorage} = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp']
  }
})

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// })

const upload = multer({ storage: storage })

module.exports = upload
