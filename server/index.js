const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/api2/register", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  // store this data on database
});

app.listen(12345, () => console.log("Server listening at 12345"));
