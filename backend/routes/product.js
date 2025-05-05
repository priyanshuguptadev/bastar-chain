const express = require("express");
const ethers = require("ethers");
const provider = new ethers.JsonRpcProvider(process.env.PROVIDER);
const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_ADDRESS, provider);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contractABI = require("../abi.js"); //hide file on github push
const uploadonCloudnary = require("../cloudinary/index.js");
const upload = require("../middlewares/multer.js");
const contract = new ethers.Contract(contractAddress, contractABI, wallet);
const ImageModel = require("../db.js");


const productRouter = express.Router();

productRouter.post("/register", upload.single('productphoto'), async (req, res) => {
  const body = req.body;
  const filePath = req.file?.path
  const imageInfo = await uploadonCloudnary(filePath)
  const imageUrl = imageInfo.url
  
  const {
    productID,
    productName,
    artisanName,
    productInfo,
    artisanAddress,
    shopID,
  } = body;
  const storeUrl = new ImageModel({
    productId: productID,
    imageUrl: imageUrl,

  })
  await storeUrl.save()
  if(!storeUrl._id){
    res.status(400).json({err: 'mongodb error!'})
    return
  }
  try {
    const tx = await contract.registerProduct(
      productID,
      productName,
      artisanName,
      productInfo,
      artisanAddress,
      shopID
    );
    await tx.wait();
    return res.json({ productID, imageUrl });
  } catch (e) {
    return res.status(400).json({ msg: 'Error found at blockchain' });
  }
});

productRouter.post("/verify", async (req, res) => {
  const body = req.body;
  const { productID } = body;
  
  const findImage = await ImageModel.findOne({productId: productID})
  const imgUrl = findImage.imageUrl;
  try {
    const details = await contract.getProductDetails(productID);
    return res.json({
      artName: details[1],
      artist: details[2],
      description: details[3],
      date: new Date(Number(details[4]) * 1000).toLocaleString(),
      source: details[5],
      imageUrl: imgUrl
    });
  } catch (e) {
    return res.status(404).json({ e });
  }
});

module.exports = productRouter;
