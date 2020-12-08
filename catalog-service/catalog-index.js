const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Catalog = require("./models/catalog");
const axios = require("axios");
const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");

let logging = require("./log-library/logging-library");
const sendingService = "catalog-index.js";

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
  const reqID = req.params.reqID;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/catalog/:reqID",
    reqID,
    "N/A",
    sendingService + " app.get()" + " Called"
  );

  catalog = await Catalog.find({});

  if (!catalog) {
    logging.createLog(
      sendingService,
      "/api/catalog/:reqID",
      reqID,
      resID,
      sendingService + " app.get()" + " Catalog is empty"
    );

    res.json({
      success: false,
      message: "Catalog is empty.",
    });
    return;
  }

  logging.createLog(
    sendingService,
    "/api/catalog/:reqID",
    reqID,
    resID,
    sendingService + " app.get()" + " Catalog retrieved"
  );

  res.json({
    success: true,
    data: catalog,
  });
});

app.get("/api/item/:item/:reqID", async (req, res) => {
  const itemID = req.params.item;
  const reqID = req.params.reqID;
  let item;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/item/:item/:reqID",
    reqID,
    "N/A",
    sendingService + " app.get()" + " Called"
  );

  if (req.params != undefined) {
    item = await Catalog.findOne({ _id: itemID });
  } else {
    return;
  }

  if (!item) {
    logging.createLog(
      sendingService,
      "/api/item/:item/:reqID",
      reqID,
      resID,
      sendingService + " app.get()" + " Item does not exist"
    );

    res.json({
      status: false,
      message: "Item does not exist",
    });
    return;
  }

  logging.createLog(
    sendingService,
    "/api/item/:item/:reqID",
    reqID,
    resID,
    sendingService + " app.get()" + " Item retrieved"
  );

  res.json({
    success: true,
    data: item,
  });
});

app.get("/api/search/:itemSearch/:reqID", async (req, res) => {
  const itemSearch = req.params.itemSearch;
  const reqID = req.params.reqID;
  let items;

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/search/:itemSearch/:reqID",
    reqID,
    "N/A",
    sendingService + " app.get()" + " Called"
  );

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
    logging.createLog(
      sendingService,
      "/api/search/:itemSearch/:reqID",
      reqID,
      resID,
      sendingService + " app.get()" + " Item does not exist"
    );

    res.json({
      status: false,
      message: "Item does not exist",
    });
    return;
  }

  logging.createLog(
    sendingService,
    "/api/search/:itemSearch/:reqID",
    reqID,
    resID,
    sendingService + " app.get()" + " Item retrieved"
  );

  res.json({
    success: true,
    data: items,
  });
});

app.post("/api/updateQuantity", async (req, res) => {
  let item;
  const reqID = req.body.reqID;
  item = await Catalog.findById(req.body.itemID);
  //console.log(req.body.id);

  let num = Math.floor(Math.random() * 100 + 1);
  const resID = num + " - " + reqID;

  logging.createLog(
    sendingService,
    "/api/updateQuantity",
    reqID,
    "N/A",
    sendingService + " app.post()" + " Called"
  );

  if (!item) {
    logging.createLog(
      sendingService,
      "/api/updateQuantity",
      reqID,
      resID,
      sendingService + " app.post()" + " item not found"
    );

    res.json({
      success: false,
      message: "item not found",
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

  logging.createLog(
    sendingService,
    "/api/updateQuantity",
    reqID,
    resID,
    sendingService + " app.post()" + " Item found"
  );

  res.json({
    success: true,
  });
});

app.listen(2468, () => console.log("Catalog server listening at 2468."));
