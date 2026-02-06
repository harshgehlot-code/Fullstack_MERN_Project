/**
 * JWT utility functions
 * Handles token generation and verification
 */

import jwt from "jsonwebtoken";
import env from "../config/env.js";

/**
 * Generates a JWT token for a user
 * @param {string} userId - The user's ID to encode in the token
 * @returns {string} JWT token
 * @throws {Error} If JWT_SECRET is not set
 */
export const generateToken = (userId) => {
  if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured. Please set it in environment variables.");
  }
  return jwt.sign({ id: userId }, env.JWT_SECRET, {
    expiresIn: "1d", // Token expires in 1 day
  });
};
