const axios = require("axios");
const app = require("express")();
const bodyParser = require("body-parser");
let userService = require("./user-service-logic");
let logService = require("./log-service-logic");

app.use(bodyParser.json());

exports.addSchedule = async (req, res) => {
  const { scheduleDate, userEmail, token } = req.body;

  let cartFromUser = await userService.getCartByReq(userEmail, token);

  let jsonPayload = {
    scheduleDate: scheduleDate,
    userEmail: userEmail,
    token: token,
    shippingCart: cartFromUser.cart,
  };

  req.body.time = Date();
  req.body.outcome = req.body.sendingService + "success";
  req.body.sendingService = "api-gateway";

  axios
    .post("http://localhost:34567/api/addschedule", jsonPayload)
    .then(logService.addLog(req, res))
    .then((axiosResponse) => {
      // console.log("Return to api from schedule service.");
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      // console.log(axiosError);
    });
};

exports.getSchedule = async (req, res) => {
  const token = req.params.token;
  const reqID = req.params.reqID;

  axios
    .get("http://localhost:34567/api/getschedule/" + token + "/" + reqID, {})
    .then((axiosResponse) => {
      console.log("Return to api from schedule service.");
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};
