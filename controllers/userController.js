import User from "../models/User.js";

// get all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    if (users.length < 1) {
      return res.status(404).json({
        success: false,
        message: "Users not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    next(error);
  }
};

// Get user by ID
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User found successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

// Create User
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

//Update user
export const updateUserbyID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "User ID not found",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

//Delete User by ID
export const deleteUserbyID = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).json({
        success: false,
        message: "User ID not found",
      });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
