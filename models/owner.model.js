const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        minLength: 3
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    gstin: String,
    picture: String
});

module.exports = mongoose.model("owner", ownerSchema)