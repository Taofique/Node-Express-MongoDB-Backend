import express from "express";

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserbyID,
  deleteUserbyID,
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllUsers); // Protected route with authMiddleware
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUserbyID);
router.delete("/:id", deleteUserbyID);

export default router;
