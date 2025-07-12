const User = require("../schema/UserSchema");
const { createSecretToken } =  require ('../Utill/SecretToken');

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { userName,email, passWord } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({userName, email, passWord });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req,res,next) => {
  try {
    const {email,passWord} = req.body;
    if(!email || !passWord){
      return res.json({message:"All fields are required"});
    }
    const user = await User.findOne({email});
    if(!user){
      return res.json({message:"User does not exist"});
    }
    const match = await bcrypt.compare(passWord,user.passWord);
    if(!match){
      return res.json({message:"Incorrect password"});
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials : true,
       httpOnly: false,
     });
     res.status(200).json({message:"User signed in successfully",success:true,user});
     next();
  }
  catch (error) {
    console.error(error);
  }
}

