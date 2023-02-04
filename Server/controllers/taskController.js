const taskSchemaService = require('../services/taskSchemaService')

exports.getTask = async function (req ,res){

    try{
        var data = await taskSchemaService.getTaskById({});
        return res.status(200).json({
            status : 200,
            data : data,
            message: "tasks finded succefully"
        })
    }
    catch(e){
        console.log(e)
     return res.status(400).json({
      status: 400,
      message: e.message,
    });
}
}

exports.addNewTask = async function (req ,res){

    try{
        var data = await taskSchemaService.addTask(req.body);
        return res.status(200).json({
            status : 200,
            data : data,
            message: "tasks finded succefully"
        })
    }
    catch(e){
        console.log(e)
     return res.status(400).json({
      status: 400,
      message: e.message,
    });
}
};

exports.Update_Task = async function (req ,res){

    try{
        var data = await taskSchemaService.updateTask(req.params.id, req.body);
        return res.status(200).json({
            status : 200,
            data : data,
            message: "tasks finded succefully"
        })
    }
    catch(e){
        console.log(e)
     return res.status(400).json({
      status: 400,
      message: e.message,
    });
}
};

exports.removeTask = async function (req, res) {
    try {
      var content = await taskSchemaService.deleteTask(req.params.id);
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