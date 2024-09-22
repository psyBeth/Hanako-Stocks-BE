'use strict'

const { mongoose } = require('../configs/dbConnection');

const SaleSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true
    },

    productId: {
        //! product first ig
    }

}, {
    collection: "sales",
    timestamps: true
});

module.exports = mongoose.model("Sale", SaleSchema);