/**
 * Contact Service
 * Handles API calls related to contact form submissions
 */

import api from "./api";

/**
 * Submit contact form data to backend
 * @param {Object} data - Contact form data (name, email, message, phone, address)
 * @returns {Promise<Object>} Response data from the API
 */
export const submitContact = async (data) => {
  try {
    if (import.meta.env.DEV) {
      console.log("Submitting contact form:", data);
    }
    const response = await api.post("/contact", data);
    if (import.meta.env.DEV) {
      console.log("Contact form response:", response.data);
    }
    return response.data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("Contact form error:", error.response?.data || error.message);
    }
    throw error;
  }
};
