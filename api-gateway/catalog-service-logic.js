const axios = require("axios");
const app = require("express")();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(cookieParser());

exports.updateQuantity = async (req, res) => {
  let jsonPayload = {
    email: req.params.email,
    token: req.params.token,
    itemID: req.body.itemID,
  };

  //axios to make http request to user service
  axios
    .post("http://localhost:2468/api/updateQuantity", jsonPayload)

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

exports.getCatalog = async (req, res) => {
  axios
    .get("http://localhost:2468/api/catalog", {})
    .then((axiosResponse) => {
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};

exports.getCatalogItem = async (req, res) => {
  const item = req.params.item;
  const data = await getCatalogItemByID(item);
  res.json(data);
};

function getCatalogItemByID(itemID) {
  return axios
    .get("http://localhost:2468/api/item/" + itemID, {})
    .then((axiosResponse) => {
      return axiosResponse.data;
    });
}

exports.getCatalogItemByID = getCatalogItemByID;

exports.getSearch = async (req, res) => {
  const itemSearch = req.params.item;
  axios
    .get("http://localhost:2468/api/search/" + itemSearch, {})
    .then((axiosResponse) => {
      res.json(axiosResponse.data);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};
