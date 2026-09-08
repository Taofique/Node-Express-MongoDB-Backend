import express from "express";
import userRoutes from "./routes/userRoutes.js";
import logger from "./middleware/logger.js";

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

app.use("/api/users", userRoutes);

export default app;
