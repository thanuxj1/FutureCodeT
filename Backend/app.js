const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./Route/Productroute"); // Product CRUD
const userRoutes = require("./Route/userroute");       // Signup/Login or user-related

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/products", productRoutes); // localhost:5000/products/...
app.use("/users", userRoutes);       // localhost:5000/users/...

// MongoDB connection
mongoose.connect("mongodb+srv://thxnujay:hazard@cluster0.6ul05sv.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
