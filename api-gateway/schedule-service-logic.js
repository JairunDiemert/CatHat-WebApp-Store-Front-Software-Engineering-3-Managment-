const axios = require("axios");
const app = require("express")();
const bodyParser = require("body-parser");
let userService = require("./user-service-logic");

app.use(bodyParser.json());

exports.addSchedule = async (req, res) => {
  let jsonPayload;
  let userEmail = req.body.userEmail;
  let token = req.body.token;
  let scheduleDate = req.body.scheduleDate;

  let cartFromUser = await userService.getCartByReq(userEmail, token);

  jsonPayload = {
    token: token,
    scheduleDate: scheduleDate,
    userEmail: userEmail,
    shippingCart: cartFromUser.cart,
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
