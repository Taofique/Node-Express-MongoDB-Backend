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

  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
};

export default errorHandler;
