const mongoose = require("mongoose");

const dbUrl="mongodb+srv://freelanceAguel:Achref1234@cluster0.agpnupo.mongodb.net/Nomadz?retryWrites=true&w=majority";


const connectDB = async ()=> {
    try {
        mongoose.connect(dbUrl);
        console.log("DataBase connected");
    }catch(err){
        console.log("Error while connecting", err.message);
    }
};
module.exports = connectDB;