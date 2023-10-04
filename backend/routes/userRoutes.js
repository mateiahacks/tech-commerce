const express = require('express');
const router = express.Router();
const { login, register, changePassword } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.put('/change-password',  protect, changePassword);

module.exports = router;