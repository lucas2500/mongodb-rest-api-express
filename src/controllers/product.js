const products = require("../models/product.js");

module.exports = {

    async ListProducts(req, res) {

        try {

            const result = await products.find();

            if (result.length > 0) {
                return res.status(200).send({ Products: result });
            }

            return res.status(404).send({ Products: result });

        } catch (err) {
            res.status(500).send({ message: "Internal server error" });
        }
    },

    async UpsertProduct(req, res) {

        let response = [];
        let body = req.body.Products;

        for (let i in body) {
            
            try {

                let filter = body[i].Code;
                await products.findOneAndUpdate(filter, body[i],
                    {
                        new: true,
                        upsert: true
                    }
                )

                response.push({ "Code": body[i].Code, "Success": true });

            } catch (error) {
                response.push({ "Code": body[i].Code, "Success": false });
            }
        }

        res.status(200).json({ Products: response });
    }
}
