/**
 * Navbar Component
 * Navigation bar component displayed on all pages
 * Provides navigation links to different sections of the website
 */

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-purple-900/95 via-blue-900/95 to-cyan-900/95 backdrop-blur-xl shadow-2xl py-3"
          : "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Company Logo/Name - links to home page */}
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-cyan-200 transition-all duration-300 transform hover:scale-105 animate-fadeIn"
          >
            <span className="text-cyan-300">Nex</span>
            <span className="text-white">Tech</span>
            <span className="text-purple-200"> Solutions</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-110 ${
                location.pathname === "/" ? "text-white border-b-2 border-cyan-300" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-110 ${
                location.pathname === "/services" ? "text-white border-b-2 border-cyan-300" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-110 ${
                location.pathname === "/about" ? "text-white border-b-2 border-cyan-300" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/careers"
              className={`text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-110 ${
                location.pathname === "/careers" ? "text-white border-b-2 border-cyan-300" : ""
              }`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={`text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-110 ${
                location.pathname === "/contact" ? "text-white border-b-2 border-cyan-300" : ""
              }`}
            >
              Contact
            </Link>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex items-center space-x-4 ml-4">
                <span className="text-white/80 text-sm">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  to="/login"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-white hover:bg-white/90 text-purple-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slideDown">
            <Link
              to="/"
              className="block text-white/90 hover:text-white py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-white/90 hover:text-white py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-white/90 hover:text-white py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/careers"
              className="block text-white/90 hover:text-white py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block text-white/90 hover:text-white py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {user ? (
              <div className="pt-2 border-t border-white/20">
                <p className="text-white/80 text-sm mb-2">Welcome, {user.name}</p>
                <button
                  onClick={handleLogout}
                  className="bg-white/20 text-white px-4 py-2 rounded-lg w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="pt-2 border-t border-white/20 space-y-2">
                <Link
                  to="/login"
                  className="block bg-white/20 text-white px-4 py-2 rounded-lg text-center"
                  onClick={() => setIsMenuOpen(false)}> Login
                </Link>
                <Link
                  to="/signup"
                  className="block bg-white text-purple-600 px-4 py-2 rounded-lg text-center font-semibold"
                  onClick={() => setIsMenuOpen(false)}> Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
