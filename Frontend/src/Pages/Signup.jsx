import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate a successful signup
    toast.success('Signup successful!', { position: 'top-center' });
    setTimeout(() => {
      onSignup(); // Update authentication state
      navigate('/'); // Redirect to home page
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-300 to-yellow-300">
      <div className="flex bg-white rounded-lg shadow-lg w-3/6 h-[550px]">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src="https://external-preview.redd.it/ed38Y6aXySWAESp8sYUVXKcqVOqRQyUnwOaKKfpfA_w.jpg?auto=webp&s=5060d871d362ab0781b5577ad49f33a2d9d22e6d"
            alt="Signup Illustration"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Signup Form Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-center text-2xl font-extrabold">Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 border rounded mt-1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="w-full bg-blue-600 text-white p-2 rounded mt-4">
              Signup
            </button>
          </form>
          <div className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;