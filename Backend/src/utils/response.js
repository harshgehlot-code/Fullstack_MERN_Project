/**
 * Response utility functions
 * Provides standardized response helpers
 */

/**
 * Sends a successful response
 * @param {Object} res - Express response object
 * @param {*} data - Data to send in response
 * @param {string} message - Success message (default: "Success")
 */
export const success = (res, data, message = "Success") => {
  res.status(200).json({ success: true, message, data });
};
