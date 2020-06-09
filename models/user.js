var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
   username: String,
   password: String,
   cartItems: [
      {
         type: String,
         
      }
   ],
	orderItems: [
      {
         type: String,
      }
   ]
});
UserSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("User", UserSchema);