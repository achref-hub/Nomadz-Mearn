
var projectSchemaService = require('../services/projectSchemaService');

exports.addNewProject = async function (req ,res, next){
  try {
    console.log(req.body,'reqbody');
    var data = await projectSchemaService.addProject(req.body);
    return res.status(200).json({
      status: 200,
      data: data,
      message: "Project added Succesfully",
    });
  } catch (e) {
    console.log(e)
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

exports.getProjectByID = async function (req, res) {
   
  try {
    var data = await projectSchemaService.getProjectById({});
    return res.status(200).json({
      status: 200,
      data: data,
      message: "Operations finded Succesfully",
    });
  } catch (e) {
    console.log(e)
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

exports.updateProjects = async function (req, res) {
  try {
    var content = await projectSchemaService.updateProject(req.params.id, req.body);
    return res.status(200).json({
      status: 200,
      data: content,
      message: "Succesfully updated",
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

exports.removeProjects = async function (req, res, next) {
  try {
    var content = await projectSchemaService.removeProject(req.params.id);
    return res.status(200).json({
      status: 200,
      data: content,
      message: "Succesfully deleted",
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};