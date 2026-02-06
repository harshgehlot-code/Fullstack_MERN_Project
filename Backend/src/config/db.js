/**
 * Database connection configuration
 * Establishes connection to MongoDB using Mongoose
 */

import mongoose from "mongoose";
import env from "./env.js";

/**
 * Connects to MongoDB database
 * Exits the process if connection fails
 */
const connectDB = async () => {
  try {
    // Validate MONGO_URI is set
    if (!env.MONGO_URI) {
      throw new Error("MONGO_URI is not configured. Please set it in environment variables.");
    }

    // Connect to MongoDB using connection string from environment variables
    await mongoose.connect(env.MONGO_URI);

    if (env.NODE_ENV !== "production") {
      console.log("✅ MongoDB connected successfully");
    }
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
    // Exit the process if database connection fails
    process.exit(1);
  }
};

export default connectDB;
