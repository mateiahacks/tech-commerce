const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        unique: true,
    },

    price: {
        type: Number,
        required: [true, "Please add a price"]
    },

    category: {
        type: String,
        required: [true, "Please add a category"]
    },

    image: {
        type: String,
        required: [true, 'Please add a image']
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);