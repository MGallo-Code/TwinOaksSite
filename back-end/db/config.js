const mongoose = require("mongoose");
// Avoid console warnings
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:2717/twinoaksdata");