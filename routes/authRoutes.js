import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  getAuthStatus,
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

import { validateRegister, validateLogin } from "../middleware/validateAuth.js";

const router = express.Router();

router.post("/register", validateRegister, registerUser);
router.post("/login", validateLogin, loginUser);

router.get("/me", authMiddleware, getCurrentUser);
router.get("/status", authMiddleware, getAuthStatus);

export default router;
