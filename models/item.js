var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   price:String,
   type:String,
});

module.exports = mongoose.model("Item", itemSchema);