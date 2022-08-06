const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    category: {
        type: String,
    },
    price : {
        type: String,
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Product', ProductSchema)