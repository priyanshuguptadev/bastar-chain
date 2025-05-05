const cloudinary = require("cloudinary").v2;
const fs = require("fs");


cloudinary.config({
  cloud_name: process.env.CLOUD_API_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadonCloudnary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    const response = await cloudinary.uploader.upload(localfilepath, {
      folder:"uploads",
      resource_type: "auto",
    });
    // fs.unlinkSync(localfilepath);
    return response;
  } catch (err) {
    console.log("Error is generated while uploading :", err);
    // fs.unlinkSync(localfilepath);
    return null;
  }
};
module.exports = uploadonCloudnary;
