const express = require("express");
const products = require("./ProductRoutes.js");

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({"Ping": "Pong"});
    })

    app.use(
        express.json(),
        products
    );
}

module.exports = routes;