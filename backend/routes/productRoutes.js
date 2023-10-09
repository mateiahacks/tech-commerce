const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');
const { uploadImage, createProduct, getProducts, getMyProducts } = require('../controllers/productController');

router.post('/', protect, createProduct);
router.get('/upload_image', uploadImage);
router.get('/', protect, getProducts);
router.get('/my', protect, getMyProducts);

module.exports = router;