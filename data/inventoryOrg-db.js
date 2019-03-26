/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");


mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/inventoryOrg-db",
  { useNewUrlParser: true }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
