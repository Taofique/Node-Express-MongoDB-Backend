import User from "../models/User.js";
import * as authService from "../services/authService.js";

export const registerUser = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Auth Login
export const loginUser = async (req, res, next) => {
  try {
    const result = await authService.loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await authService.getCurrentUser(req.userId);

    res.status(200).json({
      success: true,
      message: "User found successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const getAuthStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: "You are authenticated",
    userId: req.userId,
  });
};
