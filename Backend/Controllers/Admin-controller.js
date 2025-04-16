const model = require('../Models/Adminmodel');



const formHandler = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Perform any necessary validation or database operations
    console.log('Form data received:', { name, email, password, role });

    // Example: Respond with success
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { formHandler };