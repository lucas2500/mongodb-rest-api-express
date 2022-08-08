const express = require("express");
const ProductControler = require("../controllers/product.js")

const router = express.Router();

router 
    .get("/product", ProductControler.ListProducts)
    .post("/UpsertProduct", ProductControler.UpsertProduct)

module.exports = router;