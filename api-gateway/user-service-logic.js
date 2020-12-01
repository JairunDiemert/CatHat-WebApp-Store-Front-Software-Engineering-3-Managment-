const axios = require("axios");
const app = require("express")();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
let catalogService = require("./catalog-service-logic");

app.use(bodyParser.json());
app.use(cookieParser());

exports.isLoggedIn = (req, res) => {
  res.json({
    status: !!req.session.user,
  });
};

exports.logout = (req, res) => {
  console.log("Logging you out...");
  req.session.destroy();
  res.clearCookie("authToken");

  res.json({
    success: true,
  });
};

exports.userByEmail = async (req, res) => {
  const userEmail = req.params.email;

  //axios to make http request to user service
  axios
    .get("http://localhost:12345/api/user/" + userEmail, {})
    //axiosResponse: json payload returned from user service
    .then((axiosResponse) => {
      res.cookie("authToken", axiosResponse.data.apiToken);

      //sends json request back to calling client
      res.json(axiosResponse.data);
    })
    //catch calls errors with sending or receiving request
    .catch((axiosError) => {
      console.log(axiosError);
    });
};

exports.getCart = async (req, res) => {
  const userEmail = req.params.email;
  const token = req.params.token;
  let reqID = req.params.reqID;

  const data = await getCartByReq(userEmail, token, reqID);
  res.cookie("authToken", data.apiToken);
  res.json(data);
};

function getCartByReq(userEmail, token, reqID) {
  return axios
    .get(
      "http://localhost:12345/api/cart/" +
        userEmail +
        "/" +
        token +
        "/" +
        reqID,
      {}
    )
    .then((axiosResponse) => {
      return axiosResponse.data;
    });
}

exports.getCartByReq = getCartByReq;

exports.deleteCart = async (req, res) => {
  let jsonPayload = {
    token: req.body.token,
    userEmail: req.body.userEmail,
  };

  const url = "http://localhost:12345/api/cart/deleteAll/";

  axios
    .post(url, jsonPayload)
    .then((axiosResponse) => {
      res.cookie("authToken", axiosResponse.data.apiToken);
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError.response);
    });
};

exports.deleteCartItem = async (req, res) => {
  let jsonPayload = {
    email: req.params.email,
    token: req.params.token,
    itemID: req.body.itemID,
    reqID: req.body.reqID,
  };

  let cartItem = await catalogService.getCatalogItemByID(jsonPayload.itemID);
  //console.log(cartItem);

  const url =
    "http://localhost:12345/api/cart/delete/" +
    jsonPayload.email +
    "/" +
    jsonPayload.token +
    "/" +
    jsonPayload.reqID;
  // console.log(url);

  axios
    .post(url, { cartItem: cartItem.data })
    .then((axiosResponse) => {
      res.cookie("authToken", axiosResponse.data.apiToken);
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError.response);
    });
};

exports.addCartItem = async (req, res) => {
  let jsonPayload = {
    email: req.params.email,
    token: req.params.token,
    itemID: req.body.itemID,
    reqID: req.body.reqID,
  };

  let cartItem = await catalogService.getCatalogItemByID(jsonPayload.itemID);
  //console.log(cartItem);

  const url =
    "http://localhost:12345/api/cart/" +
    jsonPayload.email +
    "/" +
    jsonPayload.token;
  // console.log(url);

  axios
    .post(url, { cartItem: cartItem.data, reqID: jsonPayload.reqID })
    .then((axiosResponse) => {
      res.cookie("authToken", axiosResponse.data.apiToken);
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError.response);
    });
};

exports.updateUser = async (req, res) => {
  //jsonPayload containing request sent from client post in updateUser method
  let jsonPayload = {
    oldEmail: req.body.oldEmail,
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password,
    token: req.body.token,
    reqID: req.body.reqID,
  };

  //axios to make http request to user service
  axios
    .post("http://localhost:12345/api/user/:email", jsonPayload)

    //axiosResponse: json payload returned from user service
    .then((axiosResponse) => {
      res.cookie("authToken", axiosResponse.data.apiToken);

      //sends json request back to calling client
      res.json(axiosResponse.data);
    })
    //catch calls errors with sending or receiving request
    .catch((axiosError) => {
      console.log(axiosError);
    });
};

exports.getUserDetails = async (req, res) => {
  let jsonPayload;

  //checks if token retrieved from browser on client side for login usage, else login with email and password
  if (req.body.token != undefined) {
    jsonPayload = { token: req.body.token };
  } else {
    jsonPayload = { email: req.body.email, password: req.body.password };
  }

  //passes json payload to endpoint in user service
  axios
    .post("http://localhost:12345/api/login", jsonPayload)

    .then((axiosResponse) => {
      if (axiosResponse.data.success == true) {
        req.session.user = req.body.email;
        req.session.save();

        res.cookie("authToken", axiosResponse.data.apiToken);

        console.log("Logging you in...");
      }
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};

exports.register = async (req, res) => {
  let jsonPayload;

  jsonPayload = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password,
  };

  axios
    .post("http://localhost:12345/api/register", jsonPayload)
    .then((axiosResponse) => {
      console.log(axiosResponse);
      res.cookie("authToken", axiosResponse.data.apiToken);
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};
