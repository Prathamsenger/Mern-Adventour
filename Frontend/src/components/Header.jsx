import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isAuthenticated, onLogout }) => {
  const location = useLocation(); 

  return (
    <div className="box-border top-0 left-0 w-full fix pt-6 py-7 px-10 bg-white text-black flex items-center justify-between">
      <h2 className="w-8 h-8 text-blue-500 font-bold text-2xl">Adventour</h2>

      <div className="flex gap-12 font-bold">
        {isAuthenticated ? (
          <>
            <Link to="/" className="px-2 h-1 hover:underline transition duration-300">
              Home
            </Link>
            <Link to="/about" className="px-2 h-1 hover:underline transition duration-300">
              About
            </Link>
            <Link to="/country" className="px-2 h-1 hover:underline transition duration-300">
              Holidays
            </Link>
            <Link to="/activities" className="px-2 h-1 hover:underline transition duration-300">
              Activities
            </Link>
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {location.pathname !== '' && (
              <Link to="/login" className="px-2 h-1 hover:underline transition duration-300">
                Login
              </Link>
            )}
            {location.pathname !== '' && (
              <Link
                to="/signup"
                className="w-full bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Sign-up
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;