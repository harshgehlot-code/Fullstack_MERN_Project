/**
 * Job Application Model
 * Defines the schema for job applications
 */

import mongoose from "mongoose";

/**
 * Job application schema definition
 * Stores job application submissions from candidates
 */
const jobApplicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job", // Reference to Job model
      required: true, // Job ID is required
    },
    fullName: {
      type: String,
      required: true, // Full name is required
    },
    email: {
      type: String,
      required: true, // Email is required
    },
    phone: {
      type: String,
      required: true, // Phone number is required
    },
    resumeUrl: {
      type: String,
      required: true, // Resume URL is required
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Export JobApplication model
export default mongoose.model("JobApplication", jobApplicationSchema);
