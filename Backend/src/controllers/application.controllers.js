
import mongoose from "mongoose";
import JobApplication from "../models/JobApplication.model.js";
// import Job from "../models/Job.model.js";

export const applyForJob = async (req, res) => {
  try {
    const { jobId, fullName, email, phone, resumeUrl } = req.body;

    // 1. Validate required fields
    if (!jobId || !fullName || !email || !phone || !resumeUrl) {
      return res.status(400).json({ 
        message: "All fields are required: jobId, fullName, email, phone, resumeUrl" 
      });
    }

    // 2. Validate MongoDB ObjectId format
    // This replaces the broken "validJobId" logic
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({ 
        message: "Invalid job ID format. Please select a valid job." 
      });
    }

    // 3. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // 4. Validate URL format for resume
    try {
      new URL(resumeUrl);
    } catch (urlError) {
      return res.status(400).json({ message: "Invalid resume URL format" });
    }

    // 5. Create new job application (Using jobId directly from req.body)
    const application = await JobApplication.create({
      jobId: jobId,
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      resumeUrl: resumeUrl.trim(),
    });
    
    // Log only in development
    if (process.env.NODE_ENV === "development") {
      console.log("Job application submitted successfully:", application._id);
    }
    
    return res.status(201).json({
        success: true,
        message: "Application submitted successfully",
        application: {
          id: application._id,
          jobId: application.jobId,
          fullName: application.fullName,
          email: application.email,
        },
    });

  } catch (error) {
    console.error("Application error:", error);
    res.status(500).json({ 
      message: "Server error",
      error: error.message 
    });
  }
};
