'use strict'

const { mongoose } = require('../configs/dbConnection');

const FirmSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },

    phone: String,

    adress: String,

    image: {
        type: String,
        trim: true
    }

}, {
    collection: "firms",
    timestamps: true
});

module.exports = mongoose.model("Firm", FirmSchema);