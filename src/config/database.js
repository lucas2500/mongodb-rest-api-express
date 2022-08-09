const mongoose = require("mongoose");

(async () => {
    await mongoose
        .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log("Connection established successfully!!");
        }).catch((err) => {
            console.log("There was an error when trying to connect to MongoDB!!");
        });
})()
