'use strict'

const { mongoose } = require('../configs/dbConnection');

const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        set: name => name.toUpperCase()
    }

}, {
    collection: 'categories',
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);