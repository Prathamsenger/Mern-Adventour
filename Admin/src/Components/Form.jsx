import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Form = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('User'); // Default role is 'User'

  const navigate = useNavigate(); // Initialize useNavigate

  const successToast = () => {
    toast.success("Login successful", {
      position: "top-center",
    });
  };


  const errorToast = () => {
    toast.error("Invalid credentials, please signup", {
      position: "top-center",
    });
  };

  const SignupUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/admin/form", {
        username,
        email,
        password,
        phone,
        role,
      });

      if (response.status === 200) {
        successToast();
        setTimeout(() => {
          navigate("/users");
        }, 2000);
      } else {
        errorToast();
      }
    } catch (error) {
      errorToast();
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await SignupUser(); // Call SignupUser on form submission

    console.log({ username, email, phone, password, role });
    alert(`Form submitted with role: ${role}`);
  };

  return (
    <div className='relative flex justify-center items-center min-h-screen bg-blue-900'>
      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/users')} // Navigate to home page
        className="absolute top-4 left-4 font-bold py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      >
        Back to Users
      </button>

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Role Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Phone:</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 font-bold text-center py-4 px-4 bg-gray-500 hover:bg-gray-600 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;