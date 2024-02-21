const STATUS_CODES = require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const userOperations = require("../db/services/user_crud");

const userController = {

  register(request, response) {

    let userObject = {
      fullname : request.body.fullname,
      emailid : request.body.email,
      password: request.body.pwd,
      isFBpageIntegrated : false
    };
    const promise = userOperations.register(userObject);
    promise
      .then((doc) => { 
        response
          .status(STATUS_CODES.SUCCESS)
          .json({ message: messageBundle["register.welcome"], doc: doc });
      })
      .catch((err) => {
        response
          .status(STATUS_CODES.SERVER_ERROR)
          .json({ message: messageBundle["server.fail"], err });
      });
  },

  async login(request, response) {
    const user = request.body;
    try {
      const doc = await userOperations.login(user);
      if (doc) {
        response
          .status(STATUS_CODES.SUCCESS)
          .json({
            userdoc: doc,
            message: messageBundle["login.welcome"],
          });
      } else {
        response.status(STATUS_CODES.NOT_FOUND).json({ message: messageBundle["login.invaliduser"] });
      }
    } catch (err) {
      response
        .status(STATUS_CODES.SERVER_ERROR)
        .json({ message: messageBundle["server.fail"], err });
    }
  },
};

module.exports = userController;