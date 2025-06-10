const User = require("../Model/usermodel");

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length) return res.status(404).json({ message: "No users found" });
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
};

// POST create user
const addUser = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    const newUser = await User.create({ name, price, quantity });
    res.status(201).json({ user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Create failed", error: err });
  }
};

// PUT update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;
  try {
    const updated = await User.findByIdAndUpdate(id, { name, price, quantity }, { new: true });
    if (!updated) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user: updated });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err });
  }
};

// DELETE single user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err });
  }
};

// DELETE all users
const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: "All users deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete all", error: err });
  }
};

// SEARCH users by name
const searchUsers = async (req, res) => {
  const { name } = req.query;
  try {
    const users = await User.find({
      name: { $regex: name, $options: 'i' } // Case-insensitive search
    });
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Search failed", error: err });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  searchUsers // Add this to exports
};