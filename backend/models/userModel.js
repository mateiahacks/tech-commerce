const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    phone_number: {
        type: String,
    },
    zipCode: {
        type: String,
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);