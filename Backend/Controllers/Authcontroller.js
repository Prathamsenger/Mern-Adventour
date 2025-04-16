const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;



const register = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Log the incoming request body

    const { username, email, password, phone } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    console.log(userExist);

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const userCreated = await new User({
      username,
      email,
      password: hashedPassword, // Save the hashed password
      phone,
    });

    await userCreated.save();
    return res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);

    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, userExist.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: userExist._id, email: userExist.email },
      JWT_SECRET_KEY,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    res.status(200).json({
      msg: "Login successfully",
      token, // Send the token to the client
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register, login };