import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

// to parse the data from request ( middleware)
app.use(express.json());
// Logger middleware to log method and originalUrl
app.use(logger);

//routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend Server is running",
  });
});

// User routes (public)
app.use("/api/users", userRoutes);
// Auth routes
app.use("/api/auth", authRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
