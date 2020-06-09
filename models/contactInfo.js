var mongoose = require("mongoose");

var contactInfoSchema = new mongoose.Schema({
   name: String,
   phone: String,
   email: String,
   reason:String,
  
});

module.exports = mongoose.model("ContactInfo", contactInfoSchema);