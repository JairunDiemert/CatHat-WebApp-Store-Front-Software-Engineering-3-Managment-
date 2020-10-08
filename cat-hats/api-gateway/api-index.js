const axios = require("axios");
const bodyParser = require("body-parser");
const app = require("express")();
app.use(bodyParser.json());
//angular post connects to this endpoint, mirrors the post in the user service
app.post("/api/login", async (req, res) => {
  //axios to make http request to user service
  axios
    .post("http://localhost:12345/api/login", {
      //retrieve variable info from json payload that came from client side, sends to user service
      email: req.body.email,
      password: req.body.password,
    })
    //axiosResponse: json payload returned from user service
    .then((axiosResponse) => {
      console.log(axiosResponse);
      //sends json request back to calling client
      res.json(axiosResponse.data);
    })
    //catch calls errors with sending or receiving request
    .catch((axiosError) => {
      console.log(axiosError);
    });
});

//angular post connects to this endpoint, mirrors the post in the user service
app.post("/api/register", async (req, res) => {
  //axios to make http request to user service
  axios
    .post("http://localhost:12345/api/register", {
      //retrieve variable info from json payload that came from client side, sends to user service
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      password: req.body.password,
    })
    //axiosResponse: json payload returned from user service
    .then((axiosResponse) => {
      console.log(axiosResponse);
      //sends json request back to calling client
      res.json(axiosResponse.data);
    })
    //catch calls errors with sending or receiving request
    .catch((axiosError) => {
      console.log(axiosError);
    });
});

//angular post connects to this endpoint, mirrors the post in the user service
app.get("/api/user/:email", async (req, res) => {
  const userEmail = req.params.email;
  //axios to make http request to user service
  axios
    .get("http://localhost:12345/api/user/" + userEmail, {
      //retrieve variable info from json payload that came from client side, sends to user service
    })
    //axiosResponse: json payload returned from user service
    .then((axiosResponse) => {
      console.log(axiosResponse);
      //sends json request back to calling client
      res.json(axiosResponse.data);
    })
    //catch calls errors with sending or receiving request
    .catch((axiosError) => {
      console.log(axiosError);
    });
});

//angular post connects to this endpoint, mirrors the post in the user service
app.get("/api/logout", async (req, res) => {
  //axios to make http request to user service
  axios
    .get("http://localhost:12345/api/logout", {
      //retrieve variable info from json payload that came from client side, sends to user service
    })
    //axiosResponse: json payload returned from user service
    .then((axiosResponse) => {
      console.log(axiosResponse);
      //sends json request back to calling client
      res.json(axiosResponse.data);
    })
    //catch calls errors with sending or receiving request
    .catch((axiosError) => {
      console.log(axiosError);
    });
});

app.listen(54321);
