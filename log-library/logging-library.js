const axios = require("axios");

exports.createLog = async (
  sendingService,
  routeName,
  reqID,
  resID,
  outcome
) => {
  let dateAndTime = new Date();
  let jsonPayload = {
    time: dateAndTime,
    sendingService: sendingService,
    routeName: routeName,
    reqID: reqID,
    resID: resID,
    outcome: outcome,
  };

  //axios to make http request to user service
  axios.post("http://localhost:65535/addlog", jsonPayload);

  //axiosResponse: json payload returned from user service
  //.then((axiosResponse) => {
  //sends json request back to calling client
  // res.json(axiosResponse.data);
  // })
  //catch calls errors with sending or receiving request
  //.catch((axiosError) => {
  //  console.log(axiosError);
  // });
};
