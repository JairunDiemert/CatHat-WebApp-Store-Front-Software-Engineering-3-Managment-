const axios = require("axios");
const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

exports.addSchedule = async (req, res) => {
  let jsonPayload;

  jsonPayload = {
    token: req.body.token,
    scheduleDate: req.body.scheduleDate,
    userEmail: req.body.userEmail,
    shippingCart: req.body.shippingCart,
  };

  axios
    .post("http://localhost:34567/api/addschedule", jsonPayload)
    .then((axiosResponse) => {
      console.log("Return to api from schedule service.");
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};

exports.getSchedule = async (req, res) => {
  const token = req.params.token;
  axios
    .get("http://localhost:34567/api/getschedule/" + token, {})
    .then((axiosResponse) => {
      console.log("Return to api from schedule service.");
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};
