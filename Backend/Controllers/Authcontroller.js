const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registrationValidation, loginValidation } = require("../Validations/Validationschema"); 
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;


const register = async (req, res) => {
  try {
    console.log("Request body:", req.body); 
    const { error } = registrationValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }

    const { username, email, password, phone } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); 
    const userCreated = new User({
      username, 
      email,
      password: hashedPassword, 
      phone,
    });

    await userCreated.save();
    return res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json("Internal server error");
  }
};


const login = async (req, res) => {
  try {
    console.log(req.body);

    const { error } = loginValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }

    const { email, password } = req.body;

    const userExist = await User.findOne({ email }); 
    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: userExist._id, email: userExist.email },
      JWT_SECRET_KEY,
      { expiresIn: "1h" } 
    );

    res.status(200).json({
      msg: "Login successfully",
      token, 
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const contactUs = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Simulate saving the message to a database or sending an email
    console.log("Contact Form Submission:", { name, email, message });

    // Respond with success
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact form submission:", error);
    res.status(500).json({ message: "Failed to send your message. Please try again later." });
  }
};

module.exports = { register, login ,contactUs};