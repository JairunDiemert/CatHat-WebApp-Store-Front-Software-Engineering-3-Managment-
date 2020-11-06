const axios = require('axios');
const app = require('express')();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
let catalogService = require("./catalog-service-logic");

app.use(bodyParser.json());
app.use(cookieParser());

exports.isLoggedIn = (req, res) => {
    res.json({
        status: !!req.session.user,
    });
}

exports.logout = (req, res) => {
    console.log("Logging you out...");
    req.session.destroy();
    res.clearCookie("authToken");

    res.json({
        success: true,
    });
}

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
}

exports.getCart = async (req, res) => {
    const userEmail = req.params.email;
    const token = req.params.token;
    axios
        .get("http://localhost:12345/api/cart/" + userEmail + "/" + token, {})
        .then((axiosResponse) => {
            res.cookie("authToken", axiosResponse.data.apiToken);
            res.json(axiosResponse.data);
        })
        .catch((axiosError) => {
            console.log(axiosError);
        });
}

exports.addCartItem = async (req, res) => {
    let jsonPayload = {
        email: req.params.email,
        token: req.params.token,
        itemID: req.body.itemID
    };
    
    let cartItem = await catalogService.getCatalogItemByID(jsonPayload.itemID);
    console.log(cartItem);
    
    axios
        .post("http://localhost:12345/api/cart/:email/:token", jsonPayload)
        .then((axiosResponse) => {
            res.cookie("authToken", axiosResponse.data.apiToken);
            res.json(axiosResponse.data);
        })
        .catch((axiosError) => {
            console.log(axiosError);
        });
}

exports.updateUser = async (req, res) => {

    //jsonPayload containing request sent from client post in updateUser method
    let jsonPayload = {
        oldEmail: req.body.oldEmail,
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        token: req.body.token
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
}

exports.getUserDetails = async (req, res) => {
    let jsonPayload;

    //checks if token retrieved from browser on client side for login usage, else login with email and password
    if (req.body.token != undefined) {
        jsonPayload = { token: req.body.token };
    } else {
        jsonPayload = { email: req.body.email, password: req.body.password };
    }

    //passes json payload to endpoint in user service
    axios.post('http://localhost:12345/api/login', jsonPayload)

        .then(axiosResponse => {
            if (axiosResponse.data.success == true) {
                req.session.user = req.body.email;
                req.session.save();

                res.cookie("authToken", axiosResponse.data.apiToken);

                console.log("Logging you in...");
            }
            res.json(axiosResponse.data);
        })
        .catch(axiosError => {
            console.log(axiosError);
        });
}

exports.register = async (req, res) => {
    let jsonPayload;

    jsonPayload = {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
    };

    axios.post('http://localhost:12345/api/register', jsonPayload)
        .then(axiosResponse => {
            console.log(axiosResponse);
            res.cookie("authToken", axiosResponse.data.apiToken);
            res.json(axiosResponse.data);
        })
        .catch(axiosError => {
            console.log(axiosError);
        });
}