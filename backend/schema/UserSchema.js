const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Your username is required"],
  },

  email: {
    type: String,
    required: [true, "Your Email is required"],
  },

  passWord: {
    type: String,
    required: [true, "Your Email is required"],
  },
});

UserSchema.pre("save", async function () {
  this.passWord = await bcrypt.hash(this.passWord, 12);
});

module.exports = mongoose.model("user",UserSchema);