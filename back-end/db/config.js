const mongoose = require("mongoose");
// Avoid console warnings
mongoose.set('strictQuery', true);
// Connect to 'twinoaksdata' database
mongoose.connect("mongodb://localhost:27017/twinoaksdata");