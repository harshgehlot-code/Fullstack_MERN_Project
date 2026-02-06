

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api"; // Ensure this has baseURL: 'http://localhost:5000/api'

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Front-end validations
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // The path should be /auth/register if your baseURL is .../api
      const response = await api.post("/auth/register", {
        name: form.name.trim(),
        email: form.email.toLowerCase().trim(),
        password: form.password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        
        if (import.meta.env.DEV) {
          console.log("Signup success!");
        }
        navigate("/");
        window.location.reload(); // To refresh Navbar state
      }
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error("Frontend Signup Error:", err);
      }
      setError(
        err.response?.data?.message || "Server Error. Check if backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 min-h-screen flex items-center justify-center py-20 px-4">
      <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Create Account</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-100 rounded-lg border border-red-400/30">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none"
            type="password"
            placeholder="Password (min 6 chars)"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <input
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-lg border border-white/30 transition-all disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-white/80">
          Already have an account? <Link to="/login" className="underline font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

