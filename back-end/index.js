const express = require("express");
// ** Cors for preventing an issue?
const cors = require("cors");
// Import interface for User db from User.js
const User = require("./db/User");

// Connect mongoose to database
require('./db/config');

// Create app
const app = express();
app.use(express.json());
 // ** see cors note above
app.use(cors());

// Create POST request route for register
app.post("/register", async (req, resp) => {
    // Create User db object from request's body content
    let user = new User(req.body);
    // Save changes made to db, store resulting db
    let result = await user.save();
    // Remove password from response for security
    result = result.toObject();
    delete result.password;
    // Send back result db
    resp.send(result);
});

// Create POST request route for login
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.username) {
        let user = await User.findOne(req.body).select("-password");
        user ? resp.send(user) : resp.send({ result : "No user found." });
    } else {
        resp.send({ result : "No user found." })
    }
});

// Open app on localhost:5001
app.listen(5001);