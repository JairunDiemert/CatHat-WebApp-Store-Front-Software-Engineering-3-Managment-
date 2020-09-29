const connectionString =
  "mongodb+srv://madcatter:madcatter@cluster0.gjo41.mongodb.net/angulardb?retryWrites=true&w=majority";
const express = require("express");
const bodyParser = require("body-parser");
const { Mongoose } = require("mongoose");
const User = require("./models/users");
const app = express();
const mongoose = require("mongoose");
const connector = mongoose
  .connect(connectionString)
  .then(() => console.log("Mongoose up"));

mongoose.Promise = Promise;
//mongoose
//.connect("mongodb://localhost:27017/angulardb")
//.then(() => console.log("Mongoose up"));

app.use(bodyParser.json());

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const resp = await User.findOne({ email, password });
  if (!resp) {
    //console.log("incorrect details");
    res.json({
      success: false,
      message: "Incorrect details",
    });
  } else {
    res.json({
      success: true,
    });
    console.log("logging you in");
  }
  //res.send("XXX")
});

app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.json({
      success: false,
      message: "Email already in use",
    });
    return;
  }

  const user = new User({
    email,
    password,
  });

  const result = await user.save();
  console.log(result);
  res.json({
    success: true,
    message: "Welcome!",
  });
});

app.listen(12345, () => console.log("Server listening at 12345"));

// curl --header "Content-Type: application/json" --request POST --data '{"email":"cat1","password":"mad1"}' http://localhost:12345/api/login
