const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getUserService = async(id) => {
    return await User.findById(id).select("-password");
}

const registerService =  async(email, password)=> {
    try {
        let existingUser = await User.findOne({ email });
    
        if (existingUser) {
            return 400;
        } else {
          const salt = await bcrypt.genSalt(10);
          var user = new User();
          user.email = email;
          user.password = await bcrypt.hash(password, salt);
          try {
            await user.save();
            return 200;
          } catch (err) {
            console.error(err);
          }
        }
      } catch (err) {
        return 500;
      }
}

module.exports = {getUserService, registerService}