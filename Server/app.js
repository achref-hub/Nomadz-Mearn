var express = require("express");
var app = express ();
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
const connectDB = require('./db');
connectDB();

app.use("/api", require("./routes/projectSchema"));

app.listen(3000, ()=>{console.log("connecting to port 3000");})

module.exports = app;
