const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema({
    name: {
        type: String,
        required: true,  
    },
    price: {
        type: Number,
        required: true,  
    },
    quantity: {
        type: Number,
        required: true,  
    }
});

module.exports = mongoose.model("Productmodel", ProductSchema);
