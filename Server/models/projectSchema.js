var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = new Schema({

title: {
type: String,
minlength: 5,
maxlength: 50,
required : true
},
description: {
type: String,
minlength: 10,
maxlength: 200,
required : true
},
startDate: {
type: Date,
required : true
},
endDate: {
type: Date,
required : true
},
tasks: [
{
type: Schema.Types.ObjectId,
ref: "Task"
}
],
createdBy: {
type: Schema.Types.ObjectId,
ref: "User"
},
});
module.exports = mongoose.model("Project", projectSchema);
