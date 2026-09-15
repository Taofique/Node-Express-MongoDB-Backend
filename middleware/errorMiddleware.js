const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Invalid MongoDB objectID
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid ID",
    });
  }

  //Duplicate MongoDB Value
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "A user with email already exists",
    });
  }

  // Custom Application Error
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};

export default errorHandler;
