/**
 * Application Service
 * Handles API calls related to job applications
 */

import api from "./api";

/**
 * Submit job application to backend
 * @param {Object} data - Application data (fullName, email, phone, resumeUrl, jobId)
 * @returns {Promise<Object>} Response data from the API
 */
export const applyForJob = async (data) => {
  try {
    if (import.meta.env.DEV) {
      console.log("Submitting job application:", data);
    }
    const response = await api.post("/applications/apply", data);
    if (import.meta.env.DEV) {
      console.log("Job application response:", response.data);
    }
    return response.data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("Job application error:", error.response?.data || error.message);
    }
    throw error;
  }
};
