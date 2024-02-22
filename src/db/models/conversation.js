const { Schema, SchemaTypes } = require("../connect");
const mongoose = require("../connect");
const { SCHEMAS } = require("../../utils/config.js");

const convSchema = new Schema(
  {
    type: { type: SchemaTypes.String, required: true },
    pageId : {type: SchemaTypes.String, required: true },
    senderId: { type: SchemaTypes.String, required: true },
    message: { type: SchemaTypes.String, required: true },
    messageDoc : { type: SchemaTypes.Object, required: true}
  },
  { timestamps: true }
);

const ConvModel = mongoose.model(SCHEMAS.CONVERSATIONS, convSchema);
module.exports = ConvModel;
