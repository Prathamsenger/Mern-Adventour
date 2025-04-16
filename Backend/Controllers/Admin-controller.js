const User = require('../Models/Adminmodel');

// Form Handler
const formHandler = async (req, res) => {
  try {
    const { username, email, password, phone, role } = req.body;

    // Validate required fields
    if (!username || !email || !password || !phone || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password, // Note: Hash the password before saving in production
      phone,
      role,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { formHandler };