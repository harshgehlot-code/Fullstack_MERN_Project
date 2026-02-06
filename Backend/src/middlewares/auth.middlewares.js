/**
 * Authentication middleware
 * Verifies JWT tokens and protects routes
 */

import jwt from "jsonwebtoken";
import env from "../config/env.js";

/**
 * Middleware to verify JWT token from Authorization header
 * Extracts user information from token and attaches to request object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const authMiddleware = (req, res, next) => {
  // Extract token from Authorization header (format: "Bearer <token>")
  const token = req.headers.authorization?.split(" ")[1];

  // If no token provided, return unauthorized error
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(token, env.JWT_SECRET);
    
    // Attach decoded user information to request object
    req.user = decoded;
    
    // Proceed to next middleware/route handler
    next();
  } catch (error) {
    // If token is invalid or expired, return unauthorized error
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
