import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../axiosinstances";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const successToast = () => {
    toast.success("Signup successful", {
      position: "top-center",
    });
  };

  const doesNotExistToast = () => {
    toast.error("User does not exist", {
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
      const response = await axiosInstance.post("/register", {
        username,
        email,
        password,
        phone,
      });

      if (response.status === 200) {
        successToast();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else if (response.status === 400) {
        doesNotExistToast();
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
    await SignupUser();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-300 to-yellow-300">
      <div className="flex bg-white rounded-lg shadow-lg w-3/6 h-[550px]">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src="https://external-preview.redd.it/ed38Y6aXySWAESp8sYUVXKcqVOqRQyUnwOaKKfpfA_w.jpg?auto=webp&s=5060d871d362ab0781b5577ad49f33a2d9d22e6d" // Replace with your image URL
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
                autoComplete="username"
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
                autoComplete="email"
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
                autoComplete="tel"
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
                autoComplete="current-password"
              />
            </div>
            <button className="w-full bg-blue-600 text-white p-2 rounded mt-4">
              Signup
            </button>
          </form>
          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
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