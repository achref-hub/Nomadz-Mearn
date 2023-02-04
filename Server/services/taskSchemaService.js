const taskSchema = require('../models/taskSchema')

exports.addTask= async function (document){

    try{
        var addTask= await taskSchema.create(document);
        return addTask;
    }
    catch(e){
        console.log(e);
        throw Error(e);
    }
}

exports.getTaskById= async function(query){

    try{
        var content = await taskSchema.find(query)
        return content;
    }
    catch(e){
        console.log(e);
        throw Error('Task not found');
    }
}


exports.updateTask = async function (id, data){

    try{
        var content = await taskSchema.findByIdAndUpdate(id, data)
    }
    catch(e){
        console.log(e);
        throw Error('Task not update');
    }
}

exports.deleteTask = async function (id){

    try{
        var content = await taskSchema.findByIdAndDelete(id)
        return content;
    }
    catch(e){
        console.log(e);
        throw Error('Task not delete');
    }


}