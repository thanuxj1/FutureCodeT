const User = require("../Model/Productmodel");

// GET all users
const getAllProducts = async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length) return res.status(404).json({ message: "No product found" });
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
};

// POST create user
const addProducts = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    const newUser = await User.create({ name, price, quantity });
    res.status(201).json({ user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Create failed", error: err });
  }
};

// PUT update user
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;
  try {
    const updated = await User.findByIdAndUpdate(id, { name, price, quantity }, { new: true });
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ user: updated });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err });
  }
};

// DELETE single user
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Prodcut not found" });
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err });
  }
};

// DELETE all users
const deleteAllProducts = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: "All products deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete all", error: err });
  }
};

// SEARCH users by name
const searchProduct = async (req, res) => {
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
  getAllProducts,
  addProducts,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
  searchProduct // Add this to exports
};