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
    axios
        .get("http://localhost:2468/api/item/" + item, {})
        .then((axiosResponse) => {
            res.json(axiosResponse.data);
        })
        .catch((axiosError) => {
            console.log(axiosError);
        });
}
