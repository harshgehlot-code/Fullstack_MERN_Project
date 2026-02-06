/**
 * Contact Controllers
 * Handles contact form submissions
 */

import Contact from "../models/Contact.model.js";

/**
 * Submit contact form
 * Creates a new contact form submission
 * @route POST /api/contact
 * @access Public
 */
export const submitContactForm = async (req, res) => {
  try {
    // Extract and validate required fields
    const { name, email, message, phone, address } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: "Name, email, and message are required fields" 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Create new contact entry
    const contact = await Contact.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      message: message.trim(),
      phone: phone ? phone.trim() : undefined,
      address: address ? address.trim() : undefined,
    });

    // Log successful submission
    console.log("Contact form submitted:", {
      id: contact._id,
      name: contact.name,
      email: contact.email,
      timestamp: contact.createdAt
    });

    // Return success response with created contact
    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        message: contact.message,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(err => err.message);
      console.error("Contact validation error:", messages);
      return res.status(400).json({ 
        success: false,
        message: messages.join(", ") 
      });
    }
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({ 
        success: false,
        message: "Duplicate entry" 
      });
    }
    // Handle other errors
    console.error("Contact submission error:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error while submitting contact form",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
};
