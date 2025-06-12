const express = require("express");
const router = express.Router();

const Usercontroller = require("../Controller/usercontroller");

// User Routes
router.post("/register", Usercontroller.registerUser);
router.post("/login", Usercontroller.loginUser);
router.get("/", Usercontroller.getAllUsers); 


module.exports = router;