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

// Create POST request route to app
app.post("/register", async (req, resp) => {
    // Create User db object from request's body content
    let user = new User(req.body);
    // Save changes made to db, store resulting db
    let result = await user.save()
    // Send back result db
    resp.send(result);
})

// Open app on localhost:5001
app.listen(5001);