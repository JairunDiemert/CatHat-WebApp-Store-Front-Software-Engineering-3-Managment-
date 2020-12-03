const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./models/users");

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
    console.log("Mongoose connection to Users MongoDB succesfully established!")
  );

let logging = require("./log-library/logging-library");

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

app.get("/api/cart/:email/:token/:reqID", async (req, res) => {
  const userEmail = req.params.email;
  const token = req.params.token;
  let reqID = req.params.reqID;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  let user;
  let apiToken;

  if (req.body.token != undefined) {
    user = await User.findOne({ apiToken: token });
  } else {
    user = await User.findOne({ email: userEmail });
  }

  if (!user) {
    res.json({
      success: false,
      message: "Cart not retrieved. User not found.",
      resID: resID,
    });
    return;
  }

  res.json({
    success: true,
    cart: user.cart,
    apiToken: user._id,
    resID: resID,
  });
});

app.post("/api/cart/deleteAll", async (req, res) => {
  let userEmail = req.body.userEmail;
  let apiToken = req.body.token;
  let reqID = req.body.reqID;
  let user;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  if (req.body.token != undefined) {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email: userEmail });
  }

  if (!user) {
    res.json({
      success: false,
      message: "Invalid user!",
      resID: resID,
    });
    return;
  }

  await User.updateOne(
    { email: userEmail },
    {
      $set: {
        cart: [],
      },
    }
  );

  res.json({
    success: true,
    apiToken,
    resID: resID,
  });
});

app.post("/api/cart/delete/:email/:token/:reqID", async (req, res) => {
  let reqID = req.params.reqID;
  let userEmail = req.params.email;
  let apiToken = req.params.token;
  let cartItem = req.body.cartItem;
  let user;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  //console.log(cartItem);

  if (
    req.body.token != undefined &&
    mongoose.Types.ObjectId.isValid(apiToken)
  ) {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email: userEmail });
  }

  //console.log("User found to add cart item to: ", user);

  if (!user) {
    res.json({
      success: false,
      message: "Invalid user!",
      resID: resID,
    });
    return;
  }

  let itemToDelete = user.cart.find((item) => item._id == cartItem._id);
  itemToDelete._id = 0;
  user.cart = user.cart.filter((item) => item._id != 0);

  await User.updateOne(
    { email: userEmail },
    {
      $set: {
        //array destructuring
        cart: [...user.cart],
      },
    }
  );

  res.json({
    success: true,
    apiToken,
    resID: resID,
  });
});

app.post("/api/cart/:email/:token", async (req, res) => {
  //console.log("Add cart item in user service.");

  let userEmail = req.params.email;
  let apiToken = req.params.token;
  let cartItem = req.body.cartItem;
  let reqID = req.body.reqID;

  let user;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  //console.log(cartItem);

  if (
    req.body.token != undefined &&
    mongoose.Types.ObjectId.isValid(apiToken)
  ) {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email: userEmail });
  }

  //console.log("User found to add cart item to: ", user);

  if (!user) {
    res.json({
      success: false,
      message: "Invalid user!",
      resID: resID,
    });
    return;
  }

  await User.updateOne(
    { email: userEmail },
    {
      $set: {
        //array destructuring
        cart: [...user.cart, cartItem],
      },
    }
  );

  res.json({
    success: true,
    apiToken,
    resID: resID,
  });
});

app.get("/api/user/:email/:reqID", async (req, res) => {
  const userEmail = req.params.email;
  let reqID = req.params.reqID;

  let user;
  let apiToken;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  if (req.body.token != undefined) {
    user = await User.findOne({ apiToken: req.body.token });
  } else {
    user = await User.findOne({ email: userEmail });
  }

  if (!user) {
    res.json({
      status: false,
      message: "User was deleted.",
      resID: resID,
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
    apiToken: user._id,
    resID: resID,
  });
});

app.post("/api/user/:email", async (req, res) => {
  let user;
  let apiToken = req.body.token;
  let reqID = req.body.reqID;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  //if using token, pass through api token
  if (
    req.body.token != undefined &&
    mongoose.Types.ObjectId.isValid(apiToken)
  ) {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email: req.body.oldEmail });
  }

  // console.log("User found for profile update: ", user);

  if (!user) {
    res.json({
      success: false,
      message: "Invalid user!",
      resID: resID,
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
    apiToken,
    resID: resID,
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  let user;
  let apiToken = req.body.token;
  let reqID = req.body.reqID;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  console.log("Token sent into login from api: ", req.body.token);

  //retrieve user by token or regular info
  if (
    req.body.token != undefined &&
    mongoose.Types.ObjectId.isValid(apiToken)
  ) {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email, password });
  }

  if (!user) {
    res.json({
      success: false,
      message: "Incorrect credentials.",
      resID: resID,
    });
  } else {
    //json object created with success value
    res.json({
      success: true,
      apiToken: user._id,
      resID: resID,
    });
  }
});

app.post("/api/register", async (req, res) => {
  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  const { username, name, email, address, password, reqID } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.json({
      success: false,
      message: "Email already in use.",
      resID: resID,
    });
    return;
  }

  const user = new User({
    username,
    name,
    email,
    address,
    password,
  });

  //set apiToken to ObjectID
  const apiToken = user._id;

  const result = await user.save();
  console.log("New user successfully saved: ", result);

  res.json({
    success: true,
    message: "Welcome!",
    apiToken,
    resID: resID,
  });
});

app.get("/api/data", async (req, res) => {
  const user = await User.findOne({ email: req.session.user });

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  if (!user) {
    res.json({
      status: false,
      message: "User was deleted.",
      resID: resID,
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
    resID: resID,
  });
});

app.post("/api/total", async (req, res) => {
  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  //console.log(req.body.value);
  const user = await User.findOne({ email: req.session.user });
  if (!user) {
    res.json({
      success: false,
      message: "Invalid user!",
      resID: resID,
    });
    return;
  }

  await User.update(
    { email: req.session.user },
    { $set: { total: req.body.value } }
  );
  res.json({
    success: true,
    resID: resID,
  });
});

app.listen(12345, () => console.log("Server listening at 12345."));

// curl --header "Content-Type: application/json" --request POST --data '{"email":"cat1","password":"mad1"}' http://localhost:12345/api/login
