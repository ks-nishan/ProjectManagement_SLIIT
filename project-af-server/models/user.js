const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  cpwd: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
