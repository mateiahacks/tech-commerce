const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createOrder, getOrders } = require('../controllers/ordersController');
const router = express.Router();

router.post('/', protect, createOrder);
router.post('/', protect, getOrders);

module.exports = router;