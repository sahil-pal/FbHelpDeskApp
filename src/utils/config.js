module.exports = {
    ROUTES: {
      ROOT: "/",
      USER: {
        REGISTER: "/register",
        LOGIN: "/login",
        CONNECT_FB: "/connect-fb",
        DISCONNECT_FB: "/disconnect-fb",
        REPLY_MESSAGES: "/view-messages",
        VIEW_MESSAGE: "/view-message"
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
    },
  }