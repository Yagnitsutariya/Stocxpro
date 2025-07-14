const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const User = require("../schema/UserSchema");
const { createSecretToken } = require("../Utill/SecretToken");

module.exports.Signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    console.log("Received signup request with:", { username, email, password });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save(); 

    const token = createSecretToken(newUser._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.status(200).json({ message: "Login successful", success: true, user });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed", error });
  }
};
