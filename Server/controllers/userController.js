
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {getUserService, registerService} = require("../services/userService")
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
    const { email, password } = req.body;
    const userRegistered = await registerService(email, password);
    if (userRegistered === 400) {
        return res
        .status(400)
        .json({ errors: [{ msg: "Email already used !" }] });
    }
    else if (userRegistered === 500) {
        res.status(500).send("Server error");
    }
    else {res.status(200).send("user Registered");}
  };

  const login = async (req, res) => {
  
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
      }
  
      const payload = {
        user: {
          id: user.id,
          email: user.email,
        },
      };
  
      jwt.sign(
        payload,
        "Achref",
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token, user });
          res.sendStatus(200)
          
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  };
  
  

module.exports = {getUser, register, login}