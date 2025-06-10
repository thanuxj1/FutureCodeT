const express = require("express");
const router = express.Router();

// Import controller (verify path is correct)
const userController = require("../Controller/usercontroller");

// Routes
router.get("/", userController.getAllUsers);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.delete("/", userController.deleteAllUsers);
router.get("/search", userController.searchUsers);

module.exports = router;