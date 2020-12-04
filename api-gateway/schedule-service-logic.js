const axios = require("axios");
const app = require("express")();
const bodyParser = require("body-parser");
let userService = require("./user-service-logic");

app.use(bodyParser.json());

exports.addSchedule = async (req, res) => {
  const { scheduleDate, userEmail, token, reqID } = req.body;

  let cartFromUser = await userService.getCartByReq(userEmail, token, reqID);

  let jsonPayload = {
    scheduleDate: scheduleDate,
    userEmail: userEmail,
    token: token,
    shippingCart: cartFromUser.cart,
    reqID: reqID,
  };

  axios
    .post("http://localhost:34567/api/addschedule", jsonPayload)
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
