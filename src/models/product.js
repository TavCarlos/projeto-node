const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productQuantity: {
        type: String,
        required: true
    },
    productSize: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    }
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel
