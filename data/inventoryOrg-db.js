/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

/* ODM */
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/inventoryOrg-db',
  { useNewUrlParser: true }
);

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
