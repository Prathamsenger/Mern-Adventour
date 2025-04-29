

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
      const response = await axios.post("/login", {
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

  // Get users
//  useEffect(() => {
//      axiosInstance
//        .get("/login")
//        .then((res) => {
//          console.log(res.data);
//        })
//    }
//  , []);  

 // Logout



  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(); // Call loginUser on form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-300 to-yellow-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-semibold">Login Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email" // Added autocomplete attribute
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
              autoComplete="current-password" // Added autocomplete attribute
            />
          </div>
            <button className="w-full bg-blue-900 text-white p-2 rounded mt-4">
              Login
            </button>
        </form>
        <div className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
            
                 <div>  
                  login as {""}
        <Link to="http://localhost:5174/Loginadmin" className="text-blue-600" >Admin</Link>
        </div> 
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
