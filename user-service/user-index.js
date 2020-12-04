const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./models/users");
const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");

let logging = require("./log-library/logging-library");
const sendingService = "user-index.js";

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

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/cart/:email/:token/:reqID", async (req, res) => {
  const userEmail = req.params.email;
  const token = req.params.token;
  const reqID = req.params.reqID;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  let user;
  let apiToken;

  logging.createLog(
    sendingService,
    "/api/cart/:email/:token/:reqID",
    reqID,
    "N/A",
    sendingService + " app.get()" + " Called"
  );

  if (req.body.token != undefined) {
    user = await User.findOne({ apiToken: token });
  } else {
    user = await User.findOne({ email: userEmail });
  }

  if (!user) {
    logging.createLog(
      sendingService,
      "/api/cart/:email/:token/:reqID",
      reqID,
      resID,
      sendingService + " app.get()" + " Cart not retrieved. User not found"
    );

    res.json({
      success: false,
      message: "Cart not retrieved. User not found.",
    });
    return;
  }

  logging.createLog(
    sendingService,
    "/api/cart/:email/:token/:reqID",
    reqID,
    resID,
    sendingService + " app.get()" + " Cart retrieved"
  );

  res.json({
    success: true,
    cart: user.cart,
    apiToken: user._id,
  });
});

app.post("/api/cart/deleteAll", async (req, res) => {
  let userEmail = req.body.userEmail;
  let apiToken = req.body.token;
  const reqID = req.body.reqID;
  let user;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/cart/deleteAll",
    reqID,
    "N/A",
    sendingService + " app.post()" + " Called"
  );

  if (req.body.token != undefined) {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email: userEmail });
  }

  if (!user) {
    logging.createLog(
      sendingService,
      "/api/cart/deleteAll",
      reqID,
      resID,
      sendingService + " app.post()" + " Invalid user!"
    );

    res.json({
      success: false,
      message: "Invalid user!",
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

  logging.createLog(
    sendingService,
    "/api/cart/deleteAll",
    reqID,
    resID,
    sendingService + " app.post()" + " Deleted Cart"
  );

  res.json({
    success: true,
    apiToken,
  });
});

app.post("/api/cart/delete/:email/:token/:reqID", async (req, res) => {
  const reqID = req.params.reqID;
  let userEmail = req.params.email;
  let apiToken = req.params.token;
  let cartItem = req.body.cartItem;
  let user;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/cart/delete/:email/:token/:reqID",
    reqID,
    "N/A",
    sendingService + " app.post()" + " Called"
  );

  if (
    req.body.token != undefined &&
    mongoose.Types.ObjectId.isValid(apiToken)
  ) {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email: userEmail });
  }

  if (!user) {
    logging.createLog(
      sendingService,
      "/api/cart/delete/:email/:token/:reqID",
      reqID,
      resID,
      sendingService + " app.post()" + " Invalid user!"
    );

    res.json({
      success: false,
      message: "Invalid user!",
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

  logging.createLog(
    sendingService,
    "/api/cart/delete/:email/:token/:reqID",
    reqID,
    resID,
    sendingService + " app.post()" + " Item Deleted"
  );

  res.json({
    success: true,
    apiToken,
  });
});

app.post("/api/cart/:email/:token", async (req, res) => {
  //console.log("Add cart item in user service.");

  let userEmail = req.params.email;
  let apiToken = req.params.token;
  let cartItem = req.body.cartItem;
  const reqID = req.body.reqID;

  let user;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/cart/:email/:token",
    reqID,
    "N/A",
    sendingService + " app.post()" + " Called"
  );

  if (
    req.body.token != undefined &&
    mongoose.Types.ObjectId.isValid(apiToken)
  ) {
    user = await User.findById(apiToken);
  } else {
    user = await User.findOne({ email: userEmail });
  }

  if (!user) {
    logging.createLog(
      sendingService,
      "/api/cart/:email/:token",
      reqID,
      resID,
      sendingService + " app.post()" + " Invalid user!"
    );

    res.json({
      success: false,
      message: "Invalid user!",
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

  logging.createLog(
    sendingService,
    "/api/cart/:email/:token",
    reqID,
    resID,
    sendingService + " app.post()" + " Item added"
  );

  res.json({
    success: true,
    apiToken,
  });
});

app.get("/api/user/:email/:reqID", async (req, res) => {
  const userEmail = req.params.email;
  const reqID = req.params.reqID;

  let user;
  let apiToken;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/user/:email/:reqID",
    reqID,
    "N/A",
    sendingService + " app.get()" + " Called"
  );

  if (req.body.token != undefined) {
    user = await User.findOne({ apiToken: req.body.token });
  } else {
    user = await User.findOne({ email: userEmail });
  }

  if (!user) {
    logging.createLog(
      sendingService,
      "/api/user/:email/:reqID",
      reqID,
      resID,
      sendingService + " app.get()" + " User was deleted."
    );

    res.json({
      status: false,
      message: "User was deleted.",
    });
    return;
  }

  logging.createLog(
    sendingService,
    "/api/user/:email/:reqID",
    reqID,
    resID,
    sendingService + " app.get()" + " Profile retrieved"
  );

  res.json({
    status: true,
    email: user.email,
    username: user.username,
    password: user.password,
    name: user.name,
    address: user.address,
    apiToken: user._id,
  });
});

app.post("/api/user/:email", async (req, res) => {
  let user;
  let apiToken = req.body.token;
  const reqID = req.body.reqID;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/user/:email",
    reqID,
    "N/A",
    sendingService + " app.post()" + " Profile called"
  );

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
    logging.createLog(
      sendingService,
      "/api/user/:email",
      reqID,
      resID,
      sendingService + " app.post()" + " Invalid user!"
    );

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

  logging.createLog(
    sendingService,
    "/api/user/:email",
    reqID,
    resID,
    sendingService + " app.post()" + " Profile Updated"
  );

  res.json({
    success: true,
    apiToken,
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  let user;
  let apiToken = req.body.token;
  const reqID = req.body.reqID;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/login",
    reqID,
    "N/A",
    sendingService + " app.post()" + " Called"
  );

  //console.log("Token sent into login from api: ", req.body.token);

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
    logging.createLog(
      sendingService,
      "/api/login",
      reqID,
      resID,
      sendingService + " app.post()" + " Incorrect credentials."
    );

    res.json({
      success: false,
      message: "Incorrect credentials.",
    });
  } else {
    logging.createLog(
      sendingService,
      "/api/login",
      reqID,
      resID,
      sendingService + " app.post()" + " Logged in"
    );

    //json object created with success value
    res.json({
      success: true,
      apiToken: user._id,
    });
  }
});

app.post("/api/register", async (req, res) => {
  const { username, name, email, address, password, reqID } = req.body;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/register",
    reqID,
    "N/A",
    sendingService + " app.post()" + " Called"
  );

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    logging.createLog(
      sendingService,
      "/api/register",
      reqID,
      resID,
      sendingService + " app.post()" + " Email already in use."
    );

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
    password,
  });

  //set apiToken to ObjectID
  const apiToken = user._id;

  const result = await user.save();
  console.log("New user successfully saved: ", result);

  logging.createLog(
    sendingService,
    "/api/register",
    reqID,
    resID,
    sendingService + " app.post()" + " New user registered."
  );

  res.json({
    success: true,
    message: "Welcome!",
    apiToken,
  });
});

app.listen(12345, () => console.log("Server listening at 12345."));

// curl --header "Content-Type: application/json" --request POST --data '{"email":"cat1","password":"mad1"}' http://localhost:12345/api/login
