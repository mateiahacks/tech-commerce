const { generateUploadURL } = require('../config/s3');
const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

const createProduct = asyncHandler(async (req, res) => {
    const { name, description, price, category, image_url } = req.body;
    const ownerId = req.user._id;

    if (!name || !description || !price || !category) {
        res.status(400);
        throw new Error("Please add all fields");
    }

    await Product.create({ ...req.body, owner: ownerId });

    res.status(201).json({...req.body, owner: ownerId});

});


const uploadImage = asyncHandler(async (req, res) => {
    const url = await generateUploadURL();

    res.send({url});
});

module.exports = {
    createProduct,
    uploadImage,
}