const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "technicien", "client"],
    default: "client",
  },
});

module.exports = mongoose.model("User", userSchema);
