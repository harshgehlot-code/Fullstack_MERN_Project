import express from "express";
import cors from "cors";

// Import route handlers
import authRoutes from "./routes/auth.routes.js";

import applicationRoutes from "./routes/application.routes.js";
import contactRoutes from "./routes/contact.routes.js";

// Import error handling middleware
import errorHandler from "./middlewares/error.middleware.js";

// Initialize Express app
const app = express();

// Enable CORS - allows frontend to make requests to backend
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);        // Authentication routes (login)
app.use("/api/contact", contactRoutes);  // Contact form submission

app.use("/api/applications", applicationRoutes); // Job application submissions

// Root endpoint - health check
app.get("/", (req, res) => {
  res.send("NexTech Backend API Running");
});

// Error handling middleware - must be last
app.use(errorHandler);

export default app;
