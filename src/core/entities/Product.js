const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  quantity: {
    type: BigInt,
    required: [true, "Quantity is required"],
  },
});
