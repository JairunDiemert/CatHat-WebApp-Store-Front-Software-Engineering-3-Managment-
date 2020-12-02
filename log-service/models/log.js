const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  time: { type: String, required: true },
  sendingService: { type: String, required: true },
  routeName: { type: String, required: true },
  reqID: { type: String },
  resID: { type: String },
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
