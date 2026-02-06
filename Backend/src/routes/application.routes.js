/**
 * Application Routes
 * Defines routes for job application submissions
 */

import express from "express";
import { applyForJob } from "../controllers/application.controllers.js";

// Create Express router
const router = express.Router();

// POST /api/applications - Submit job application
router.post("/apply", applyForJob);

export default router;
