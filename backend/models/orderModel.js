const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    products: {
        type: Array,
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);