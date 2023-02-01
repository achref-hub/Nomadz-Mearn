const express = require("express");
const router = express.Router();

const projectSchemaController = require('../controllers/projectSchemaController');

router.post("/addNewProject", projectSchemaController.addNewProject);
router.get("/getProject", projectSchemaController.getProjectByID);
router.put("/updateProject:id", projectSchemaController.updateProjects);
router.delete("/deleteProject/:id", projectSchemaController.removeProjects);


module.exports = router;