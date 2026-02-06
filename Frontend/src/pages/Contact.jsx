/**
 * Contact Page Component
 * Displays contact form for users to send messages
 * Submits contact form data to the backend API
 */

import { useState } from "react";
import { submitContact } from "../services/contactService";

const Contact = () => {
  // Form state to store user input
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /**
   * Handle form submission
   * Submits contact form to the backend API
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Submit contact form to backend
      await submitContact(form);
      
      // Show success message and reset form
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", address: "", message: "" });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 min-h-screen flex items-center justify-center py-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-white">Contact Us</h2>
        <p className="text-center text-white/80 mb-6">We'd love to hear from you</p>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-500/20 backdrop-blur-sm text-green-100 rounded-lg border border-green-400/30 animate-fadeIn">
            Message sent successfully!
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 backdrop-blur-sm text-red-100 rounded-lg border border-red-400/30 animate-shake">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {/* Name Input */}
          <input
            className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
            disabled={loading}
          />

          {/* Email Input */}
          <input
            className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
            disabled={loading}
          />

          {/* Phone Input */}
          <input
            className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
            placeholder="Phone Number"
            type="tel"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            disabled={loading}
          />

          {/* Address Input */}
          <input
            className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
            placeholder="Address"
            type="text"
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
            disabled={loading}
          />

          {/* Message Textarea */}
          <textarea
            className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all resize-none"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            required
            disabled={loading}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 rounded-lg border border-white/30 transition-all duration-300 disabled:opacity-50 transform hover:scale-105 active:scale-95"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
