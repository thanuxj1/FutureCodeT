const Product = require("../Model/Productmodel");

// GET all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products.length) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products); // ✅ Changed here
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
};


// POST create a product
const addProduct = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    const newProduct = await Product.create({ name, price, quantity });
    res.status(201).json({ product: newProduct });
  } catch (err) {
    res.status(500).json({ message: "Failed to create product", error: err.message });
  }
};

// PUT update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, quantity },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: "Failed to update product", error: err.message });
  }
};

// DELETE a single product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete product", error: err.message });
  }
};

// DELETE all products
const deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: "All products deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete all products", error: err.message });
  }
};

// SEARCH products by name
const searchProduct = async (req, res) => {
  const { name } = req.query;
  try {
    const products = await Product.find({
      name: { $regex: name, $options: "i" }, // Case-insensitive partial match
    });
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: "Failed to search products", error: err.message });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
  searchProduct,
};
