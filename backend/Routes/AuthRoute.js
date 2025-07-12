const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../Controller/AuthController");
const { userVerification } = require("../Middleware/Middleware");

router.post("/signup", Signup);
router.post("/login", Login);

router.use(userVerification);
router.get("/me", (req, res) => {
  try {
    if (req.user) {
      res.json({ user: req.user });
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error(error);
    res.json({ message: "Error fetching user data" });
  }
});

module.exports = router;
