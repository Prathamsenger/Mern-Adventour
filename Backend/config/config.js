
const mongoose = require("mongoose");
const connectDB = async () => {
  console.log("connection with mongoDB",process.env.MONGODB_URI );
  try {
    await mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://singhpratham128:7814196406@backend.dl4rv.mongodb.net/users')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err))
  } catch (error) {
    console.log("Connection faild", error);
  }
};


module.exports = connectDB;