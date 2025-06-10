const express = require("express");
const mongoose = require("mongoose");
const route = require("./Route/userroute");
const app = express();

// Middleware
app.use(express.json()); // <--- Add this to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // <--- For form data
app.use("/users", route);

// MongoDB connection
mongoose.connect("mongodb+srv://thxnujay:hazard@cluster0.6ul05sv.mongodb.net/")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((err) => console.log(err));