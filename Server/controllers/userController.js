
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {getUserService} = require("../services/userService")
const User = require('../models/user')
const getUser = async (req, res) => {
  try {
    const {id} = req.body;
    const user = await getUserService(id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const register = async (req, res) => {
  console.log(req.body)
    const { email, password } = req.body;
    try {
      let existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Email already used !" }] });
      } else {
        const salt = await bcrypt.genSalt(10);
        var user = new User();
        user.email = req.body.email;
        user.password = await bcrypt.hash(password, salt);
        try {
          await user.save();
          res.send("user added");
        } catch (err) {
          console.error(err);
        }
      }
    } catch (err) {
      res.status(500).send("Server error");
    }
  };

module.exports = {getUser, register}