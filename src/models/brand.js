'use strict'

const { mongoose } = require('../configs/dbConnection');

const BrandSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },

    image: {
        type: String,
        trim: true
    }

}, {
    collection: "brands",
    timestamps: true
});

module.exports = mongoose.model("Brand", BrandSchema);