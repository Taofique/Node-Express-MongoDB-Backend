import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      count: users.length,
      users,
    });
  } catch (error) {
    next(error);
  }
});

// Intentional Route error for checking error handling
router.get("/error", (req, res, next) => {
  const error = new Error("Test error");
  next(error);
});

// Get single user
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    res.status(200).json({
      message: "User found",
      userData: user,
    });
  } catch (error) {}
});

// POST user (Create User)
router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
});

//
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
  } catch (error) {}
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "User deleted successfully",
    userId: id,
  });
});

export default router;
