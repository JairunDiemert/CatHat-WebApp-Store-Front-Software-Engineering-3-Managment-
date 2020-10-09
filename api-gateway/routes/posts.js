const express = require("express");

const router = express.Router();

router.get("/posts", (req, res) => {
  res.send("These are posts.");
});

module.exports = router;
