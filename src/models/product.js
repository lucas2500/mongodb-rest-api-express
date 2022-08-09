const mongoose = require("mongoose");

const ProductSchemma = new mongoose.Schema(

    {
        id: { type: String },
        Code: { type: String, required: true },
        Name: { type: String, required: true },
        Barcode: { type: String, required: true },
        Active: { type: Boolean, required: true }
    }
);

const products = mongoose.model("Products", ProductSchemma);

module.exports = products;