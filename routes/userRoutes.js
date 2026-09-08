import express from "express";

const router = express.Router();

// Intentional Route error for checking error handling
router.get("/error", (req, res, next) => {
  const error = new Error("Test error");
  next(error);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "User found",
    userId: id,
  });
});

router.post("/", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: "User created successfully",
    user: {
      name,
      email,
    },
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  res.status(200).json({
    message: "User updated successfully",
    user: {
      id,
      name,
      email,
    },
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "User deleted successfully",
    userId: id,
  });
});

export default router;
