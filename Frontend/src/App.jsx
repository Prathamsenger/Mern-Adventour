import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Country from "./Pages/Country";
import Activities from "./Pages/Activities";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated && <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <LandingPage />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} /> {/* Pass handleSignup as onSignup */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass handleLogin as onLogin */}
        <Route path="/about" element={isAuthenticated ? <About /> : <LandingPage />} />
        <Route path="/country" element={isAuthenticated ? <Country /> : <LandingPage />} />
        <Route path="/activities" element={isAuthenticated ? <Activities /> : <LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;