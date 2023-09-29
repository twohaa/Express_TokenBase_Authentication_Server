require("dotenv").config();
const mongoose = require("mongoose");
const dbURL = process.env.MONGO_URL;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Mongoose atlas is connected...");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });