require("dotenv/config");
const express = require("express");
const routes = require("./routes/index.js");
const db = require("./config/database.js");

db.on("error", console.log.bind(console, "There was an error when trying to connect to MongoDB!!"));
db.once("open", () => {
    console.log("Connection established successfully!")
});

const app = express();

app.use(express.json());

routes(app);

module.exports = app;