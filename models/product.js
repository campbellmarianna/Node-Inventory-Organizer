const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    name: { type: String, required: true },
    quantity: { type: String, required: true }
});

ProductSchema.pre("save", function(next) {
  // SET createdAt AND updatedAt
  const now = new Date();
  this.updatedAt = now;

  if (!this.createdAt) {
    this.createdAt = now;
  }

  next();
});

module.exports = mongoose.model("Product", ProductSchema);
