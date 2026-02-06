/**
 * Contact Model
 * Defines the schema for contact form submissions
 */

import mongoose from "mongoose";

/**
 * Contact schema definition
 * Stores contact form submissions from website visitors
 */
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name is required
    },
    email: {
      type: String,
      required: true, // Email is required
    },
    phone: {
      type: String,
      required: false, // Phone is optional
    },
    address: {
      type: String,
      required: false, // Address is optional
    },
    message: {
      type: String,
      required: true, // Message is required
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Export Contact model
export default mongoose.model("Contact", contactSchema);
