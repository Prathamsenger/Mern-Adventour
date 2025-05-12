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
import LandingPage from "./Pages/LandingPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <LandingPage />} />
        <Route path="/country" element={isAuthenticated ? <Country /> : <LandingPage />} />
        <Route path="/activities" element={isAuthenticated ? <Activities /> : <LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;