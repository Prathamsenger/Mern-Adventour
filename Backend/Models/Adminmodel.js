const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String, 
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
});

// Check if the model already exists before defining it
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;