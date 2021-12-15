const express = require("express");
const router = express.Router();
// const router = require("express").Router();
const authUser = require("./authUser");
const User = require("../models/userModel");

// register : create account
router.post("/register", async (req, res) => {
  //  partie crud application rest api youtube
  const userdb = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  // *******
  try {
    const user = User.create(req.body);
    await user.generateToken();
    res.send(userdb);
    // res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findByCredentials(email, password);
    await user.generateToken();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/auto-login", authUser, async (req, res) => {
  res.send(req.user);
});

router.post("/logout", authUser, async (req, res) => {
  const user = req.user;
  user.token = "";
  await user.save();
  // req.session.destroy()
  res.status(200).send();
});

// get users
router.get("/users", (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});
