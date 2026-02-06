/**
 * Server entry point
 * Connects to database and starts the Express server
 */

import app from "./app.js";
import connectDB from "./config/db.js";
import env from "./config/env.js";

// Connect to MongoDB database
connectDB();

// Start the server on the configured port
app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
