const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true,  // fixed
    },
    price: {
        type: Number,
        required: true,  // fixed
    },
    quantity: {
        type: Number,
        required: true,  // fixed
    }
});

module.exports = mongoose.model("usermodel", userSchema);
