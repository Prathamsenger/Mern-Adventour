import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../axiosinstances";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const successToast = () => {
    toast.success("Login successful", {
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

  const loginUser = async () => {
    try {
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      if (response.status === 200) {
        successToast();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else if (response.status === 400) {
        doesNotExistToast();
        setTimeout(() => {
          navigate("/");
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
    await loginUser(); // Call loginUser on form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-300 to-yellow-300">
      <div className="flex bg-white rounded-lg shadow-lg w-3/6 h-[500px] ">
    
        <div className="w-1/2" >
          <img
            src="https://external-preview.redd.it/ed38Y6aXySWAESp8sYUVXKcqVOqRQyUnwOaKKfpfA_w.jpg?auto=webp&s=5060d871d362ab0781b5577ad49f33a2d9d22e6d" // Replace with your image URL
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        <div className="w-1/2 p-10 gap-3">
          <h2 className="text-center text-2xl font">Login</h2>
          <form onSubmit={handleSubmit } className="space-y-9">
            <div className="mt-8">
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
            <div className="mt-4">
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
              Login
            </button>
          </form>
          <div className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign Up
            </Link>
            <div>
              Login as{" "}
              <Link
                to="http://localhost:5174/Loginadmin"
                className="text-blue-600"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;