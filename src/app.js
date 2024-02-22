require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ROOT } = require('./utils/config.js').ROUTES;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use(ROOT + "user", require("./api/routes/users"));
app.use(ROOT + "messenger", require("./api/routes/messenger.js"));

const server = app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.log(`Failed to start Server`);
  }
  else {
    console.log(`Server started on port ${server.address().port}`);
  }
})