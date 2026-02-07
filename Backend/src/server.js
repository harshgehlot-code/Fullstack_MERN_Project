// /**
//  * Server entry point
//  * Connects to database and starts the Express server
//  */

// import app from "./app.js";
// import connectDB from "./config/db.js";
// import env from "./config/env.js";

// // Connect to MongoDB database
// connectDB();

// // Start the server on the configured port
// app.listen(env.PORT, () => {
//   console.log(`Server running on port ${env.PORT}`);
// });


import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

// Connect DB and Start Server
const startServer = async () => {
  try {
    await connectDB();
    console.log(" MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error(" Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();