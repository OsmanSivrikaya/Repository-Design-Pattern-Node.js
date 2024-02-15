const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://osmansivrikaya927:MV7hzT8rV8yExWIz@cluster0.zrgn73r.mongodb.net/?retryWrites=true&w=majority";

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
