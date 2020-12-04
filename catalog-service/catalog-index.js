const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://madcatter:madcatter@cluster0.gjo41.mongodb.net/angulardb?retryWrites=true&w=majority";
const connector = mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      "Mongoose connection to Catalogs MongoDB successfully established!"
    )
  );

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Catalog = require("./models/catalog");
const axios = require("axios");
let logging = require("./log-library/logging-library");

app.use(bodyParser.json());
app.use(cookieParser());

mongoose.Promise = Promise;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/catalog/:reqID", async (req, res) => {
  let catalog;
  let reqID = req.params.reqID;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  catalog = await Catalog.find({});

  if (!catalog) {
    res.json({
      success: false,
      message: "Catalog is empty.",
      resID: resID,
    });
    return;
  }

  res.json({
    success: true,
    data: catalog,
    resID: resID,
  });
});

app.get("/api/item/:item/:reqID", async (req, res) => {
  const itemID = req.params.item;
  let reqID = req.params.reqID;
  let item;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  if (req.params != undefined) {
    item = await Catalog.findOne({ _id: itemID });
  } else {
    return;
  }

  if (!item) {
    res.json({
      status: false,
      message: "Item does not exist",
      resID: resID,
    });
    return;
  }

  res.json({
    success: true,
    data: item,
    resID: resID,
  });
});

app.get("/api/search/:itemSearch/:reqID", async (req, res) => {
  const itemSearch = req.params.itemSearch;
  let reqID = req.params.reqID;
  let items;

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  if (req.params != undefined) {
    items = await Catalog.find({
      title: { $regex: itemSearch, $options: "i" },
    });
    items.concat(
      await Catalog.find({ description: { $regex: itemSearch, $options: "i" } })
    );
  } else {
    return;
  }

  if (!items[0]) {
    res.json({
      status: false,
      message: "Item does not exist",
      resID: resID,
    });
    return;
  }

  res.json({
    success: true,
    data: items,
    resID: resID,
  });
});

app.post("/api/updateQuantity", async (req, res) => {
  let item;
  let reqID = req.body.reqID;
  item = await Catalog.findById(req.body.itemID);
  //console.log(req.body.id);

  let date = new Date();
  let num = Math.floor(Math.random() * 100 + 1);
  let resID = date + num;

  if (!item) {
    res.json({
      success: false,
      message: "item not found",
      resID: resID,
    });
    return;
  }

  if (req.body.direction === 1) {
    await Catalog.updateOne(
      { _id: req.body.itemID },
      {
        $set: {
          quantity: item.quantity + 1,
        },
      }
    );
  } else {
    await Catalog.updateOne(
      { _id: req.body.itemID },
      {
        $set: {
          quantity: item.quantity - 1,
        },
      }
    );
  }

  res.json({
    success: true,
    resID: resID,
  });
});

app.listen(2468, () => console.log("Catalog server listening at 2468."));
