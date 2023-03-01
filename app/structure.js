const mongoose = require("mongoose");
const Schema = mongoose.Schema(
  {
    title: String,
    author: String,
    description: String,
    cost: Number,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("books", Schema);
