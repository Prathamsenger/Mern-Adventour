import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../axiosinstances";

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const successToast = () => {
    toast.success("Signup successful!", {
      position: "top-center",
    });
  };

  const errorToast = () => {
    toast.error("An error occurred. Please try again.", {
      position: "top-center",
    });
  };

  const signupUser = async () => {
    try {
      const response = await axiosInstance.post("/register", {
        email,
        password,
        username,
        phone,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        successToast();
        onSignup(); // Update authentication state
        setTimeout(() => {
          navigate("/"); // Redirect to home page
        }, 2000);
      } else {
        errorToast();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message, { position: "top-center" });
      } else {
        errorToast();
      }
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signupUser();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-300 to-yellow-300">
      <div className="flex bg-white rounded-lg shadow-lg w-3/6 h-[600px]">
        <div className="w-1/2">
          <img
            src="https://external-preview.redd.it/ed38Y6aXySWAESp8sYUVXKcqVOqRQyUnwOaKKfpfA_w.jpg?auto=webp&s=5060d871d362ab0781b5577ad49f33a2d9d22e6d"
            alt="Signup Illustration"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-1/2 p-10 gap-1">
          <h2 className="text-center text-2xl font">Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-9">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 border rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="w-full bg-blue-600 text-white p-2 rounded">
              Signup
            </button>
          </form>
          <div className="text-center text-sm mt-2">
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

export default Signup;