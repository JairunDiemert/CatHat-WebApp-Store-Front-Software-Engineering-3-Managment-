const axios = require('axios');
const app = require('express')();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
let userService = require("./user-service-logic");

app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  //session cookie for reloading and open/closing
  session({
    secret: "cathat",
    cookie: {},
  })
);

app.get("/api/isloggedin", (req, res) => {
  userService.isLoggedIn(req, res);
});

app.get("/api/logout", (req, res) => {
  userService.logout(req, res);
});

//connect client method with matching protocol in user service
app.get("/api/user/:email", async (req, res) => {
  userService.userByEmail(req,res);
});

//connect updateUser method with matching POST in user service
app.post("/api/user/:email", async (req, res) => {
  userService.updateUser(req,res);
});

//connect getUserDetails with user service login protocol
app.post("/api/login", async (req, res) => {
  userService.getUserDetails(req,res);
});

//connect registerUser method with matching endpoint in user service
app.post("/api/register", async (req, res) => {
  userService.register(req,res);
});

app.listen(54321);

