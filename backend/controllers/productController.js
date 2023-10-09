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

const getProducts = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
    const category = req.query.category;

    try {
        const skip = (page - 1) * limit;

        const totalProducts = await Product.countDocuments(category ? {category: category}:{});
        const products = await Product.find(category ? {category: category}:{})
        .skip(skip)
        .limit(limit);

        const results = {
            totalProducts,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: page,
        };

        if (page < results.totalPages) {
        results.nextPage = page + 1;
        }

        if (page > 1) {
        results.prevPage = page - 1;
        }

        results.products = products;

        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const getMyProducts = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

    try {
        const skip = (page - 1) * limit;

        const totalProducts = await Product.countDocuments({owner: req.user._id});
        const products = await Product.find({owner: req.user._id})
        .skip(skip)
        .limit(limit);

        const results = {
            totalProducts,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: page,
        };

        if (page < results.totalPages) {
        results.nextPage = page + 1;
        }

        if (page > 1) {
        results.prevPage = page - 1;
        }

        results.products = products;

        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const getProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });

    if (!product) {
        res.status(400);
        throw new Error("Product with such id doesn't exist");
    }

    res.status(200).json(product);

});

const editProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });

    console.log(req.body);

    if (!product) {
        throw new Error("Product with such id doesn't exist");
    }

    await Product.findOneAndUpdate({ _id: id }, req.body);

    res.status(201).json({ message: "Successfully updated" });
});


const uploadImage = asyncHandler(async (req, res) => {
    const url = await generateUploadURL();

    res.send({url});
});

module.exports = {
    createProduct,
    uploadImage,
    getProducts,
    getMyProducts,
    getProduct,
    editProduct,
}