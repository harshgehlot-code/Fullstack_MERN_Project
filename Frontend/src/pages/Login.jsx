/**
 * Login Page Component
 * User login page with JWT authentication
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const Login = () => {
  // Form state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  /**
   * Handle form submission
   * Authenticates user and stores JWT token
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send login request to backend
      const response = await api.post("/auth/login", form);
      
      // Store token in localStorage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      // Redirect to home
      navigate("/");
      window.location.reload();
    } catch (err) {
      // Handle errors
      setError(
        err.response?.data?.message || "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 min-h-screen flex items-center justify-center py-20 px-4">
      <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-white/80 mb-6">
          Login to your account
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 backdrop-blur-sm text-red-100 rounded-lg border border-red-400/30 animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              disabled={loading}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <input
              className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
              disabled={loading}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 rounded-lg border border-white/30 transition-all duration-300 disabled:opacity-50 transform hover:scale-105 active:scale-95"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-center text-white/80">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-white font-semibold hover:text-white/80 underline transition"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;




