/**
 * Environment configuration
 * Loads and exports environment variables with defaults
 */

import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

/**
 * Environment variables configuration object
 * Provides access to all environment variables with defaults
 */
const env = {
  PORT: process.env.PORT || 5000,                    // Server port (default: 5000)
  MONGO_URI: process.env.MONGO_URI,                  // MongoDB connection string
  JWT_SECRET: process.env.JWT_SECRET,                // Secret key for JWT token signing
  NODE_ENV: process.env.NODE_ENV || "development",   // Environment mode (development/production)
};

// Validate required environment variables in production
if (env.NODE_ENV === "production") {
  const requiredVars = ["MONGO_URI", "JWT_SECRET"];
  const missingVars = requiredVars.filter((varName) => !env[varName]);
  
  if (missingVars.length > 0) {
    console.error(" Missing required environment variables:", missingVars.join(", "));
    console.error("Please set these variables before starting the server in production.");
    process.exit(1);
  }
}

// Warn if using defaults in production
if (env.NODE_ENV === "production") {
  if (!process.env.PORT) {
    console.warn(" Using default PORT (5000). Consider setting PORT environment variable.");
  }
}

export default env;
