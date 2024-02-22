const { Schema, SchemaTypes } = require("../connect");
const mongoose = require("../connect");
const { SCHEMAS } = require("../../utils/config.js");

const userSchema = new Schema(
  {
    fullname: { type: SchemaTypes.String, required: true },
    emailid: { type: SchemaTypes.String, required: true, unique: true },
    password: { type: SchemaTypes.String, required: true, min: 3, max: 30 },
  },
  { timestamps: true }
);

const UserModel = mongoose.model(SCHEMAS.USERS, userSchema);
module.exports = UserModel;
