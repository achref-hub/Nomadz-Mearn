const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: true,
      },
      lastname: {
        type: String,
        trim: true,
        required: true,
      },
      Email: {
        type: String,
        trim: true,
        required: true,
      }

});
module.exports = mongoose.model("User", user);
