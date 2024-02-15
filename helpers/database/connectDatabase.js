const mongoose = require("mongoose");

//const MONGO_URI =
//  "mongodb+srv://<username>:<pasword>@cluster0.zrgn73r.mongodb.net/?retryWrites=true&w=majority";

const MONGO_URI = "";

const connectDatabase = () => {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Error connecting to database", error);
    });
};

module.exports = connectDatabase;
