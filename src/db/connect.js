const mongoose = require("mongoose");

const dbOptions = {
  maxPoolSize: 5,
};

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DB_URL, dbOptions, (err) => {
  if (err) {
    console.log("Failed to setup DB connection", err);
  } else {
    console.log("DB connected Successfully !");
  }
});

module.exports = mongoose;
