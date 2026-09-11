import express from "express";

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserbyID,
  deleteUserbyID,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUserbyID);
router.delete("/:id", deleteUserbyID);

export default router;
