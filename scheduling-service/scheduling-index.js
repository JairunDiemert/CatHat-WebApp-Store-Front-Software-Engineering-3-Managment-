const express = require("express");
const app = express();
const bodyParser = require("body-parser");
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
  console.log("New schedule successfully saved: ", result);

  res.json({
    success: true,
    message: "Schedule added!",
    token,
  });
});

app.get("/api/getschedule/:token", async (req, res) => {
  const token = req.params.token;

  let schedule;

  if (token != undefined) {
    schedule = await Schedule.find({ token: token });
  }

  if (!schedule) {
    res.json({
      success: false,
      message: `No schedule found.`,
    });
    return;
  }

  res.json({
    success: true,
    message: "Schedule found.",
    schedule: schedule,
  });
});

app.listen(34567, () => console.log("Server listening at 34567."));
