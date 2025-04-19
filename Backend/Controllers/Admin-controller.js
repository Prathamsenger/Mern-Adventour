const User = require("../Models/Adminmodel")


const getAllusers = async ( req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    
    if (!users || users.length === 0) {
      res.status(200).json({ msg: "no user found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

module.export =  getAllusers ;