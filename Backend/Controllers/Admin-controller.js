const User = require("../Models/Adminmodel");

// Function to get all users
const getAllusers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 }); 
    console.log(users);

    if (!users || users.length === 0) {
      return res.status(200).json({ msg: "No user found" });
    }

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { username, email, password, role, phone } = req.body;

    // Validate required fields
    if (!username || !email || !password || !phone|| !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Create a new user
    const userCreated = new User({
      username,
      email,
      password,
      phone,
      role
    });

    await userCreated.save();
    res.status(201).json({ message: "User added successfully", user: userCreated });
  } catch (error) {
    next(error);
  }
};



const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const isPasswordValid = password === user.password; 
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }


    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};



const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, role, phone } = req.body;

  try {
    // Find the user by ID and update their details
    const user = await User.findByIdAndUpdate(
      id,
      { username, email, role, phone },
      { new: true, runValidators: true } 
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
};

module.exports = { getAllusers, createUser, loginUser, deleteUser, updateUser };
