const { Schema, model } = require("mongoose");

const userDataSchema = new Schema({
  id: String,
  name: String,
  password: String,
  email: String,
});

const UserModel = model("User", userDataSchema);

module.exports = UserModel;
