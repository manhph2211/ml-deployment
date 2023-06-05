const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Users = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("user", Users);
