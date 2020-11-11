const axios = require("axios");
const app = require("express")();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(cookieParser());

exports.addSchedule = async (req, res) => {
  let jsonPayload;

  jsonPayload = {
    token: req.body.token,
    scheduleDate: req.body.scheduleDate,
    userEmail: req.body.userEmail,
    catalogTitle: req.body.catalogTitle,
  };

  axios
    .post("http://localhost:34567/api/addschedule", jsonPayload)
    .then((axiosResponse) => {
      console.log("Return to api from schedule service.");
      res.cookie("authToken", axiosResponse.data.apiToken);
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};
