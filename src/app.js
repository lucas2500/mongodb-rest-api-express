require("dotenv/config");
require("./config/database.js");
const express = require("express");
const routes = require("./routes/index.js");

const app = express();

app.use(express.json());

routes(app);

module.exports = app;