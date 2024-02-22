module.exports = {
    ROUTES: {
      ROOT: "/",
      USER: {
        REGISTER: "/register",
        LOGIN: "/login",
      },
      MESSENGER : {
        WEEBHOOKS : "/webhook"
      },
      CONVERSATION : {
        GETALLCONV : "/getconversation"
      }
    },
    STATUS_CODES: {
      NOT_FOUND: 404,
      SUCCESS: 200,
      SERVER_ERROR: 500,
      FILE_NOT_FOUND: 404,
    },
    SCHEMAS: {
      USERS: "users",
      CONVERSATIONS : "conversations"
    },
  }