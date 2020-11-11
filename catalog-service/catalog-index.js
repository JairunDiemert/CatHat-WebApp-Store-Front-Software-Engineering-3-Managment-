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

app.use(bodyParser.json());
app.use(cookieParser());

mongoose.Promise = Promise;

app.get("/api/catalog", async (req, res) => {
  let catalog;

  catalog = await Catalog.find({});

  if (!catalog) {
    res.json({
      success: false,
      message: "Catalog is empty.",
    });
    return;
  }

  res.json({
    success: true,
    data: catalog,
  });
});

app.get("/api/item/:item", async (req, res) => {
  const itemID = req.params.item;
  let item;

  if (req.params != undefined) {
    item = await Catalog.findOne({ _id: itemID });
  } else {
    return;
  }

  if (!item) {
    res.json({
      status: false,
      message: "Item does not exist",
    });
    return;
  }

  res.json({
    success: true,
    data: item,
  });
});

app.get("/api/search/:itemSearch", async (req, res) => {
  const itemSearch = req.params.itemSearch;
  let items;

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
    });
    return;
  }

  res.json({
    success: true,
    data: items,
  });
});

app.post("/api/updateQuantity", async (req, res) => {
  let item;

  item = await Catalog.findById(req.body.itemID);
  //console.log(req.body.id);

  if (!item) {
    res.json({
      success: false,
      message: "item not found",
    });
    return;
  }

  await Catalog.updateOne(
    { _id: req.body.itemID },
    {
      $set: {
        quantity: item.quantity - 1,
      },
    }
  );

  res.json({
    success: true,
  });
});

app.listen(2468, () => console.log("Catalog server listening at 2468."));
