const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  time: { type: String, required: false },
  sendingService: { type: String, required: false },
  routeName: { type: String, required: false },
  reqID: { type: String },
  resID: { type: String },
  outcome: { type: String },
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
