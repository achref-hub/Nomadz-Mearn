const projectSchema = require('../models/projectSchema');

exports.addProject = async function(document){
    
    try{
      var add_Project = await projectSchema.create (document);
      return add_Project; 
    }
    catch (e) {
      console.log(e);
      throw Error(e);
  
    }
    
  }
  exports.getProjectById = async function (query){
    try{
      var content = await projectSchema.find(query)
      return content;
    } catch(e){
      console.log(e);
      throw Error('Error while finding Projects ');
    }
  };

  exports.updateProject =async function(id , data){
    try{
      var content = await projectSchema.findByIdAndUpdate(id , data);
      return content;
    }catch(e){
      throw Error("Error while updating Project");
    }
  }
  exports.removeProject = async function (id) {
    try {
      var content = await projectSchema.findByIdAndDelete(id);
      return content;
    } catch (e) {
      throw Error("Error while deleting Project");
    }
  };
  