import React, { useState, useEffect } from "react";
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
import MapLoader from "./components/Maploader";
import AutocompleteInput from "./components/Autocompleteinput";

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
  const [isLoading, setIsLoading] = useState(false); // Remove loading state

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {isAuthenticated && <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
      <div style={{ flex: 1 }}> {/* Add flex: 1 to the content area */}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <LandingPage />} />
          <Route path="/country" element={isAuthenticated ? <Country /> : <LandingPage />} />
          <Route path="/activities" element={isAuthenticated ? <Activities /> : <LandingPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;