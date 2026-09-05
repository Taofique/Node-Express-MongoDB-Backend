import express from "express";

const app = express();

const PORT = 5000;

//Middleware to read JSON request bodies
app.use(express.json());

// GET request on the defautl route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend server is running",
  });
});

// Route Parameter
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "User found",
    userId: id,
  });
});

//Query Parameter
app.get("/products", (req, res) => {
  const { page, limit } = req.query;

  res.status(200).json({
    message: "Products fetched",
    page,
    limit,
  });
});

//POST request

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  res.status(201).json({
    message: "User created successfully",
    user: {
      name,
      email,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
