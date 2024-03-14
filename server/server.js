const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;
const SECRET_KEY = "secretkey";
//user schema

const User = require("./models/userSchema");

// connect to mongo db
const dbUrl = process.env.CONNECTION;
mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Example app listening on port ${port} and connected to mongo db`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

// middleware
app.use(bodyParser.json());
app.use(cors());

//routes

//get request
app.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users" });
  }
});

//post request register
app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error Signing up" });
  }
});

//get login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});
