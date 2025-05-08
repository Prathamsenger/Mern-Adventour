import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Country from "./Pages/Country";
import Activities from "./Pages/Activities";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignup = () => {
    setIsAuthenticated(true); // Update authentication state
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Update authentication state
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Reset authentication state
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Login onLogin={handleLogin} />} />
        <Route path="/country" element={isAuthenticated ? <Country /> : <Login onLogin={handleLogin} />} />
        <Route path="/activities" element={isAuthenticated ? <Activities /> : <Login onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;