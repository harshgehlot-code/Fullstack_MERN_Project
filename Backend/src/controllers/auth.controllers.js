
//     // Gen

/**
 * Authentication Controllers
 * Handles user authentication and authorization
 */

import User from "../models/User.model.js";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcryptjs"; // Used for comparison in login

/**
 * User registration controller
 * @route POST /api/auth/register
 */
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Basic Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // 3. Password Length Validation
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // 4. Check Duplicate User
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // 5. Create User
    // Note: Ensure your User.model.js has a pre-save hook to hash 'password'
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
    });

    // 6. Token Generation
    // If JWT_SECRET is missing in .env, generateToken might throw an error
    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      message: "User registered successfully",
    });

  } catch (error) {
    // Log only in development
    if (process.env.NODE_ENV === "development") {
      console.error("Signup Error Details:", error);
    }

    // Specific Mongoose Error Handling
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Generic Server Error
    return res.status(500).json({ 
      success: false,
      message: "Internal Server Error during registration",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
};

/**
 * User login controller
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password required" });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    
    // Check user and compare hashed password
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      message: "Login successful",
    });

    } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Login Error Details:", error);
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error during login",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
};

export const loginAdmin = loginUser;
