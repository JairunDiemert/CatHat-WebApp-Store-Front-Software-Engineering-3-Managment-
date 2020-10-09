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
  await User.find({ email: userEmail }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result[0]);
    }
  });
});
app.get("/api/user/:email", async (req, res) => {
  const userEmail = req.params.email;
  const user = await User.findOne({ email: userEmail });
  console.log(userEmail);
  if (!user) {
    res.json({
      status: false,
      message: "User was deleted",
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
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  let resp;

  //if using token, pass through api token
  if(req.body.token != undefined) {
    resp = await User.findOne({apiToken: req.body.token});
  } else {
    resp = await User.findOne({ email, password });
  }
  if (!resp) {
    //console.log("incorrect details");
    res.json({
      success: false,
      message: "Incorrect credentials",
    });
  } else {
    //json object created with success value
    res.json({
      success: true,
    });
  }
  //res.send("XXX")
});

app.post("/api/register", async (req, res) => {
  const { username, name, email, address, password } = req.body;

  //concatenate cat with email string, template literal
  const token = `cat-${email}`;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.json({
      success: false,
      message: "Email already in use",
    });
    return;
  }

  const user = new User({
    username,
    name,
    email,
    address,
    password,
    apiToken: token //pass concat string to db
  });

  const result = await user.save();
  console.log(result);
  
  res.json({
    success: true,
    message: "Welcome!",
    
    //set cookie, (name of cookie being created, value of cookie concat string)
    token
  });
});

app.get("/api/data", async (req, res) => {
  const user = await User.findOne({ email: req.session.user });

  if (!user) {
    res.json({
      status: false,
      message: "User was deleted",
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
  console.log(req.session.user, req.body.value);
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

app.post("/api/user/:email", async (req, res) => {
  console.log(req.session.user, req.body.oldEmail);
  const user = await User.findOne({ email: req.body.oldEmail });
  if (!user) {
    res.json({
      success: false,
      message: "Invalid user!",
    });
    return;
  }

  await User.update(
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
  });
});

app.listen(12345, () => console.log("Server listening at 12345"));

// curl --header "Content-Type: application/json" --request POST --data '{"email":"cat1","password":"mad1"}' http://localhost:12345/api/login
