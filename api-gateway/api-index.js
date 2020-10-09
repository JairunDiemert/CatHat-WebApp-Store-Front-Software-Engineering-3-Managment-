const axios = require('axios');
const app = require('express')();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

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
    res.json({
        status: !!req.session.user,
    });
});

app.get("/api/logout", (req, res) => {
    console.log("loging you out");
    req.session.destroy();
    
    res.json({
      success: true,
    });
  });

//angular post connects to this endpoint, mirrors the post in the user service
app.post("/api/login", async (req, res) => {

    //create variable to hold jsonPayload containing request sent through client post
    let jsonPayload;

    //if api get(token) set, then login with api token, else login with email and password
    if(req.body.token != undefined) {
        jsonPayload = {token: req.body.token};
    }
    else {
        jsonPayload = {email: req.body.email, password: req.body.password};
    }

    //axios to make http request to user service
    //retrieve variable info from json payload that came from client side, sends to user service
    axios.post('http://localhost:12345/api/login', jsonPayload)
    
    //axiosResponse: json payload returned from user service
    .then(axiosResponse => {
        console.log(axiosResponse);

        if(axiosResponse.data.success == true) {
            req.session.user = req.body.email;
            req.session.save();
            console.log("Logging you in...");
        }

        //sends json request back to calling client
        res.json(axiosResponse.data);
    })
    //catch calls errors with sending or receiving request
    .catch(axiosError => {
        console.log(axiosError);
    });
});

app.post("/api/register", async (req, res) => {

    //create variable to hold jsonPayload containing request sent through client post
    let jsonPayload;

    jsonPayload = {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email, 
        address: req.body.address,
        password: req.body.password,
    };

    //axios to make http request to user service
    //retrieve variable info from json payload that came from client side, sends to user service
    axios.post('http://localhost:12345/api/register', jsonPayload)

    //axiosResponse: json payload returned from user service contains message and token if success message true
    .then(axiosResponse => {
        console.log(axiosResponse);

        res.cookie("authToken", axiosResponse.data.token);

        //sends json request back to calling client
        res.json(axiosResponse.data);
    })
    //catch calls errors with sending or receiving request
    .catch(axiosError => {
        console.log(axiosError);
    });
});

app.listen(54321);

