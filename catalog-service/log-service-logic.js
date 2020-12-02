const axios = require("axios");
const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

exports.addLog = async (req, res) => {
  let jsonPayload;
  let time = req.body.time;
  let sendingService = req.body.sendingService;
  let routeName = req.body.routeName;
  let reqID = req.body.reqID;
  let resID = req.body.resID;
  let outcome = req.body.outcome;

  jsonPayload = {
    time: time,
    sendingService: sendingService,
    routeName: routeName,
    reqID: reqID,
    resID: resID,
    outcome: outcome,
  };

  axios
    .post("http://localhost:65535/addlog", jsonPayload)
    .then((axiosResponse) => {
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};

exports.getLog = async (req, res) => {
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
