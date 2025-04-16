const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true ,
        unique: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
   
    password: { 
        type: String, 
        required: true ,

    },  

    phone:{
        type: Number,
        required: true
    },

    role: {
        type: String,
        default: "user"
        }


})

module.exports = userSchema

