const express = require("express");
const ProductController = require("../controllers/product.js");

const router = express.Router();

router 
    .get("/product", ProductController.ListProducts)
    .post("/UpsertProduct", ProductController.UpsertProduct)
    .delete("/DeleteProduct", ProductController.DeleteProduct)

module.exports = router;