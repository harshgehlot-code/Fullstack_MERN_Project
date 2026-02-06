/**
 * Authentication Routes
 * Defines routes for user authentication
 */

import express from "express";
import { registerUser, loginUser, loginAdmin } from "../controllers/auth.controllers.js";

// Create Express router
const router = express.Router();

// POST /api/auth/register - User registration endpoint
router.post("/register", registerUser);

// POST /api/auth/login - User/Admin login endpoint
router.post("/login", loginUser);

// POST /api/auth/admin/login - Admin login endpoint (alias for backward compatibility)
router.post("/admin/login", loginAdmin);

export default router;
