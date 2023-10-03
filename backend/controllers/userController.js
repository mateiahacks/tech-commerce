const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// Register user

const register = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    const emailExists = await User.findOne({email});

    if(emailExists) {
        res.status(400);
        throw new Error('User with this email already exists');
    }

    const nameExists = await User.findOne({name});

    if(nameExists) {
        res.status(400);
        throw new Error('User with this username already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name, email, password: hashedPassword,
    });

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }
});

// Login user

const login = asyncHandler( async (req, res) => {
    const { email, password } = req.body;
    
    // check for user email
    const user = await User.findOne({email});

    if(user && await bcrypt.compare(password, user.password)) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
});


// Generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}

module.exports = {
    register,
    login
}