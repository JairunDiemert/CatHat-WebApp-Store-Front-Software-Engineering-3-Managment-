const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Log = require("./models/log");

const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://madcatter:madcatter@cluster0.gjo41.mongodb.net/angulardb?retryWrites=true&w=majority";
const connector = mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      "Mongoose connection to Log MongoDB succesfully established!"
    )
  );

app.use(bodyParser.json());

mongoose.Promise = Promise;

app.listen(98765, () => console.log("Server listening at 98765."));