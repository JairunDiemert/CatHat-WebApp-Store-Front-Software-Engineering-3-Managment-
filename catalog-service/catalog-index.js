const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://madcatter:madcatter@cluster0.gjo41.mongodb.net/angulardb?retryWrites=true&w=majority";
const connector = mongoose
  .connect(connectionString, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log("Mongoose connection to Catalogs MongoDB successfully established!"));

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
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
        data: catalog
    });
});

app.listen(2468, () => console.log("Catalog server listening at 2468."));