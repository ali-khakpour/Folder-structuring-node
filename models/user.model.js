const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: { type: String, require: true },
  phoneNumber: { type: Number, require: true },
  password: { type: Number, require: true },
}, {
    timestamps: true
});

const userModel = model("user", userSchema, "users")


module.exports ={
    userModel
}