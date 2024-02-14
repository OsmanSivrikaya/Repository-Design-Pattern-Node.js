const mongoose = require("mongoose");

const MONGO_URI = 'mongodb+srv://osmansivrikaya927:<password>@cluster0.zrgn73r.mongodb.net/?retryWrites=true&w=majority';

const connectDatabase = () => {
  mongoose.connect(MONGO_URI,{useNewUrlParser: true}).then(() =>{
    console.log("Connected to database");
  }).catch((error) => {
    console.log("Error connecting to database", error);
  });
}

module.exports = connectDatabase;