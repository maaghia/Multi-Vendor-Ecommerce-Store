const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  postedBy:{
    type: Schema.ObjectId,
    required: false,
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
