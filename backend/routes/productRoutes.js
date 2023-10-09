const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');
const { uploadImage, createProduct } = require('../controllers/productController');

router.post('/', protect, createProduct);
router.get('/upload_image', uploadImage);

module.exports = router;