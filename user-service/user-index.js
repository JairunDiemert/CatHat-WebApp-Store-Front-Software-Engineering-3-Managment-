const connectionString =
  "mongodb+srv://madcatter:madcatter@cluster0.gjo41.mongodb.net/angulardb?retryWrites=true&w=majority";
const express = require("express");
const app = express();
const User = require("./models/users");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");
const connector = mongoose
  .connect(connectionString)
  .then(() => console.log("Mongoose up"));


app.use(
  //session cookie for reloading and open/closing
  session({
    secret: "cathat",
    cookie: {},
  })
);

app.use(bodyParser.json());

app.use(cookieParser());

mongoose.Promise = Promise;

app.get("/api/user/:email", async (req, res) => {
  const userEmail = req.params.email;

  let user;
  let apiToken;

  if(req.body.token != undefined) {
    user = await User.findOne({ apiToken: req.body.token });
  } else {
    user = await User.findOne({ email: userEmail });
  }

  if (!user) {
    res.json({
      status: false,
      message: "User was deleted.",
    });
    return;
  }

  res.json({
    status: true,
    email: user.email,
    total: user.total,
    username: user.username,
    password: user.password,
    name: user.name,
    address: user.address,
    apiToken: user._id
  });
});

app.post("/api/user/:email", async (req, res) => {
  let user;
  let apiToken = req.body.token;

  //if using token, pass through api token
  if((req.body.token != undefined) && mongoose.Types.ObjectId.isValid(apiToken)) {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email: req.body.oldEmail });
  }

  console.log("User found for profile update: ", user);

  if (!user) {
    res.json({
      success: false,
      message: "Invalid user!",
    });
    return;
  }

  await User.updateOne(
    { email: req.body.oldEmail },
    {
      $set: {
        username: req.body.username,
        name: req.body.name,
        address: req.body.address,
        password: req.body.password,
        email: req.body.email,
      },
    }
  );

  res.json({
    success: true,
    apiToken
  });

});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  let user;
  let apiToken = req.body.token;

  console.log("Token sent into login from api: ", req.body.token);

  //retrieve user by token or regular info
  if((req.body.token != undefined) && mongoose.Types.ObjectId.isValid(apiToken))  {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email, password });
  }
  
  if (!user) {
    res.json({
      success: false,
      message: "Incorrect credentials.",
    });
  } else {
    //json object created with success value
    res.json({
      success: true,
      apiToken: user._id
    });
  }
});

app.post("/api/register", async (req, res) => {
  const { username, name, email, address, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.json({
      success: false,
      message: "Email already in use.",
    });
    return;
  }

  const user = new User({
    username,
    name,
    email,
    address,
    password
  });

  //set apiToken to ObjectID
  const apiToken = user._id;

  const result = await user.save();
  console.log("New user successfully saved: ", result);
  
  res.json({
    success: true,
    message: "Welcome!",
    apiToken
  });
});

app.get("/api/data", async (req, res) => {
  const user = await User.findOne({ email: req.session.user });

  if (!user) {
    res.json({
      status: false,
      message: "User was deleted.",
    });
    return;
  }

  res.json({
    status: true,
    email: req.session.user,
    total: user.total,
    username: user.username,
    password: user.password,
    name: user.name,
    address: user.address,
  });
});

app.post("/api/total", async (req, res) => {
  console.log(req.body.value);
  const user = await User.findOne({ email: req.session.user });
  if (!user) {
    res.json({
      success: false,
      message: "Invalid user!",
    });
    return;
  }

  await User.update(
    { email: req.session.user },
    { $set: { total: req.body.value } }
  );
  res.json({
    success: true,
  });
});

app.listen(12345, () => console.log("Server listening at 12345."));

// curl --header "Content-Type: application/json" --request POST --data '{"email":"cat1","password":"mad1"}' http://localhost:12345/api/login
