const express = require("express");
const router = express.Router();

// Import controller (verify path is correct)
const Productcontroller = require("../Controller/Productcontroller");
const Usercontroller = require("../Controller/usercontroller");

// Routes
router.get("/", Productcontroller.getAllProducts);
router.post("/", Productcontroller.addProducts);
router.put("/:id", Productcontroller.updateProduct);
router.delete("/:id", Productcontroller.deleteProduct);
router.delete("/", Productcontroller.deleteAllProducts);
router.get("/search",Productcontroller.searchProduct);
router.post("/signup", Usercontroller.registerUser); // You need to create this function
router.post("/login", Usercontroller.loginUser);

module.exports = router;