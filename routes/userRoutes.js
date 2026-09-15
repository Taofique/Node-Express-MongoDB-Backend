import express from "express";

import {
  getAllUsers,
  getUserById,
  updateUserbyID,
  deleteUserbyID,
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import authorizeUser from "../middleware/authorizeUser.js";

const router = express.Router();

router.get("/", authMiddleware, getAllUsers); // Protected route with authMiddleware
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, authorizeUser, updateUserbyID);
router.delete("/:id", authMiddleware, authorizeUser, deleteUserbyID);

export default router;
