import express from "express";

const app = express();

// to parse the data from request ( middleware)
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend Server is running",
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "User found",
    userId: id,
  });
});

app.get("products", (req, res) => {
  const { page, limit } = req.query;
  res.status(200).json({
    message: "Product fetched",
    page,
    limit,
  });
});

app.post("users", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: "User created successfully",
    user: {
      name,
      email,
    },
  });
});

app.put("/users/:id", (req, res) => {
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

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "User deleted successfully",
    userId: id,
  });
});

export default app;
