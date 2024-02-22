const ConvModel = require("../models/conversation.js");

module.exports = {

  async saveConversation(convObject) {
    await ConvModel.create(convObject);
  },

  async getConversation({ pageId }) {
    // const doc = await ConvModel.findOne({ emailid: email });
    // if (doc) {
    //   if (encryption.compareHash(doc.password, pwd)) {
    //     return doc;
    //   } else {
    //     return null;
    //   }
    // }
    // return null;
  },

};
