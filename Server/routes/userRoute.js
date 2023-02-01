const express = require("express");
const userController = require("../controllers/userController");

const UserRouter = express.Router();

UserRouter.get("/", userController.getUser);
UserRouter.post("/register", userController.register);
module.exports = UserRouter;