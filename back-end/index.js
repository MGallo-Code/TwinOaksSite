const express = require("express");
const mongoose = require("mongoose");
// Avoid console warnings
mongoose.set('strictQuery', true);

const app = express();
const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017");
    const projectSchema = new mongoose.Schema({});
    const project = mongoose.model("projects", projectSchema);
    const data = await project.find();
    console.warn(data);
}

connectDB();

app.listen(5080);