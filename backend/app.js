const express = require("express");
const mongoose = require("mongoose");
const Course = require("./models/livre");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/biblio-mean-hamza", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected successfully to MongoDB !"))
  .catch(() => console.log("Connection failed to MongoDB !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/api/books", (req, res) => {
  Course.find()
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(400).json({ message: err.message }));
});

app.use((req, res) => {
  res.json({ message: "This is hamza server response" });
});

module.exports = app;
