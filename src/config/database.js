const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

module.exports = db;