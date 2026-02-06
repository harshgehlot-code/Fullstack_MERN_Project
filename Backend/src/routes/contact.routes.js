/**
 * Contact Routes
 * Defines routes for contact form submissions
 */

import express from "express";
import { submitContactForm } from "../controllers/contact.controllers.js";

// Create Express router
const router = express.Router();

// POST /api/contact - Submit contact form
router.post("/", submitContactForm);

export default router;
