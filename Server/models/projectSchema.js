var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = new Schema({

title: {
type: String,
minlength: 5,
maxlength: 50,

},
description: {
type: String,
minlength: 10,
maxlength: 200
},
startDate: {
type: Date,
},
endDate: {
type: Date,
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
}
});
module.exports = mongoose.model("Project", projectSchema);
