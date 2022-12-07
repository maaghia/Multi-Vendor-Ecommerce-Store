const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  /* imageURL: {
    type: String,
    required: false,
    unique: true,
  },
  state: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  } */
}, {timestamps: true});
module.exports = mongoose.model("Product", ProductSchema);
