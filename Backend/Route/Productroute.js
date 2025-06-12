const express = require("express");
const router = express.Router();

const Productcontroller = require("../Controller/Productcontroller");

// Routes
router.get("/", Productcontroller.getAllProducts);
router.post("/", Productcontroller.addProduct);
router.put("/:id", Productcontroller.updateProduct);
router.delete("/:id", Productcontroller.deleteProduct);
router.delete("/", Productcontroller.deleteAllProducts);
router.get("/search", Productcontroller.searchProduct);

module.exports = router;
