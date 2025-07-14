const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../Controller/AuthController");
const { userVerification } = require("../Middleware/Middleware");

// Public routes
router.post("/signup", Signup);
router.post("/login", Login);

// Protected route
router.get("/me", userVerification, (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({ success: true, user: req.user });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
