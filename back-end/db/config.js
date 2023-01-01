const mongoose = require("mongoose");
// Avoid console warnings
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/twinoaksdata");