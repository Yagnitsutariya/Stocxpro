const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Your username is required"],
  },

  email: {
    type: String,
    required: [true, "Your Email is required"],
  },

  password: {
    type: String,
    required: [true, "Your Email is required"],
  },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("user",UserSchema);