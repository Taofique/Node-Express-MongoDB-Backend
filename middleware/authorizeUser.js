const authorizeUser = (req, res, next) => {
  const { id } = req.params;

  if (req.userId.toString() !== id) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to perform this action",
    });
  }

  next();
};

export default authorizeUser;
