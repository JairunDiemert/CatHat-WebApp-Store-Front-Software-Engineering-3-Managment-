const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Schedule = require("./models/schedule");
let logService = require("./log-service-logic");

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

app.use(bodyParser.json());

mongoose.Promise = Promise;

app.post("/api/addschedule", async (req, res) => {
  const { token, scheduleDate, userEmail, shippingCart } = req.body;

  const schedule = new Schedule({
    token,
    scheduleDate,
    userEmail,
    shippingCart,
  });

  const result = await schedule.save();
  // console.log("New schedule successfully saved: ", result);
  if (result) {
    let date = new Date();
    let num = Math.floor(Math.random() * 100 + 1);
    let resID = date + num;

    res.json({
      success: true,
      message: "Schedule added!",
      token: token,
      time: Date(),
      outcome: req.body.sendingService + "success",
      sendingService: "scheduling-index",
      routeName: req.body.routeName,
      reqID: req.body.reqID,
      resID: resID,
    });
  } else {
    res.json({
      success: false,
      message: "Schedule not added!",
      token: token,
      time: Date(),
      outcome: req.body.sendingService + "fail",
      sendingService: "scheduling-index",
      routeName: req.body.routeName,
      reqID: req.body.reqID,
      resID: resID,
    });
  }
});

app.get("/api/getschedule/:token/:reqID", async (req, res) => {
  const token = req.params.token;
  const reqID = req.params.reqID;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  let schedule;

  if (token != undefined) {
    schedule = await Schedule.find({ token: token });
  }

  if (!schedule) {
    res.json({
      success: false,
      message: `No schedule found.`,
      resID: resID,
    });
    return;
  }

  res.json({
    success: true,
    message: "Schedule found.",
    schedule: schedule,
    resID: resID,
  });
});

app.listen(34567, () => console.log("Server listening at 34567."));
