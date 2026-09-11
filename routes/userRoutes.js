import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    if (users.length < 1) {
      res.status(404).json({
        success: false,
        message: "Users not found",
      });
    }

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

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
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

//PUT users (Update a user by ID)
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
      },
      {
        new: true,
        runValidators: true,
      },
    ).select("-password");

    if (!updatedUser) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      updatedUser,
    });
  } catch (error) {
    next(error);
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  const deletedUser = await User.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    deletedUser,
  });
});

export default router;
