const User= require("../Models/Adminmodel")

const getUsers = async (req, res) => {
    try{
        let users = await User.find()
        return res.send({status: 200,
            userData: users
        })
    }
    catch(err){
        return res.status(404).json({
            message: 'error while fetching users data'
        })
    }
}

module.exports = getUsers