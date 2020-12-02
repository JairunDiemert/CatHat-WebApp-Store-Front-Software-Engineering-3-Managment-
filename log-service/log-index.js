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
    console.log("Mongoose connection to Log MongoDB succesfully established!")
  );

app.use(bodyParser.json());

mongoose.Promise = Promise;

app.post("/api/addlog", async (req, res) => {
  const { time, sendingService, routeName, reqID } = req.body;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  const log = new Log({
    time,
    sendingService,
    routeName,
    reqID,
    resID,
  });

  const result = await log.save();
  // console.log("New schedule successfully saved: ", result);

  res.json({
    success: true,
    message: "Log added!",
    resID: resID,
  });
});

app.get("/", async (req, res) => {
  res.json({
    success: true,
    message: `get worked!.`,
  });
});

app.listen(65535, () => console.log("Server listening at 65535."));

//this command in terminal will post a log to te database
//curl -d '{"time":"12/02/2020:09:08AM", "sendingService":"user-service", "routeName":"addlog", "reqID":"time+ID"}' -H "Content-Type: application/json" -X POST http://localhost:65535/api/addlog
