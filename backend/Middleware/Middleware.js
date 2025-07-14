const User = require("../schema/UserSchema");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

 
  if (!token) {
    return res.status(401).json({ message: "User is not logged in", success: false });
  }

  try {
  
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // 3. Find the user in the database
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    
    req.user = user;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ message: "Invalid or expired token", success: false });
  }
};
