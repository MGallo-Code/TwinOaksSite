const mongoose = require("mongoose");

// Define structure of users db
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});

// Export an interface for users database
module.exports = mongoose.model("users", userSchema);