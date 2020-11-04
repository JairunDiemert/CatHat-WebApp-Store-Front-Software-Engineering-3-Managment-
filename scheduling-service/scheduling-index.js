const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Schedule = require("./models/schedule");

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
      "Mongoose connection to Scheduling MongoDB succesfully established!"
    )
  );

app.use(
  //session cookie for reloading and open/closing
  session({
    secret: "cathat",
    cookie: {},
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

mongoose.Promise = Promise;

app.listen(34567, () => console.log("Server listening at 34567."));
