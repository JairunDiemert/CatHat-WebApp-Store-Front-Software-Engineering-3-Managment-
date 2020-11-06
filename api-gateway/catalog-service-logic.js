const axios = require('axios');
const app = require('express')();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());

exports.getCatalog = async (req, res) => {
    axios
        .get("http://localhost:2468/api/catalog", {})
        .then((axiosResponse) => {
            res.json(axiosResponse.data);
        })
        .catch((axiosError) => {
            console.log(axiosError);
        });
}

exports.getCatalogItem = async (req, res) => {
    const item = req.params.item;
    const data = await getCatalogItemByID(item);
    res.json(data);
}

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
}
