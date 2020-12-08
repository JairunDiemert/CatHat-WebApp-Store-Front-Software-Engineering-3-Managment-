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

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/addlog", async (req, res) => {
  let { time, sendingService, routeName, reqID, resID, outcome } = req.body;

  const log = new Log({
    time,
    sendingService,
    routeName,
    reqID,
    resID,
    outcome,
  });

  const logged = await log.save();
  if (logged) {
    res.json({
      success: true,
      message: "Log added!",
    });
  } else {
    res.json({
      success: false,
      message: "Log not added!",
    });
  }
});

app.get("/", async (req, res) => {
  res.json({
    success: true,
    message: `get worked!.`,
  });
});

app.get("/serviceLogs/:serviceName", async (req, res) => {
  const serviceName = req.params.serviceName;
  const log = await Log.find({ sendingService: serviceName });

  res.json({
    log,
  });
});

app.get("/logByDate/:date", async (req, res) => {
  const date = req.params.date;
  const log = await Log.find({ time: date });

  res.json({
    log,
  });
});

app.get("/logByReq/:reqID", async (req, res) => {
  const reqID = req.params.reqID;
  const log = await Log.find({ reqID: reqID });

  res.json({
    log,
  });
});

app.get("/logByRes/:resID", async (req, res) => {
  const responseID = req.params.resID;
  const log = await Log.find({ resID: responseID });

  res.json({
    log,
  });
});

app.listen(65535, () => console.log("Server listening at 65535."));

//this command in terminal will post a log to te database
//curl -d '{"scheduleDate":"12/02/2020:09:08AM", "userEmail":"email@email.com", "token":"5f83be08846d0d305dee174d", "reqID":"time+ID", "time":"TODAY"}' -H "Content-Type: application/json" -X POST http://localhost:54321/api/addschedule
