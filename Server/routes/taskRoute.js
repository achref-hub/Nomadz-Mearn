const express = require("express");
const TaskController = require('../controllers/taskController');

const routerTask = express.Router();

routerTask.get("/", TaskController.getTask);
routerTask.post("/addTask", TaskController.addNewTask);
routerTask.put("/UpdateTask",TaskController.Update_Task);
routerTask.delete("/deleteTask", TaskController.removeTask);

module.exports = routerTask;