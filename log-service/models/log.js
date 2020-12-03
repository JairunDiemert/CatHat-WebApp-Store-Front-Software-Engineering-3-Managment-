const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  time: { type: String, default: "Undefined" },
  sendingService: { type: String, default: "Undefined" },
  routeName: { type: String, default: "Undefined" },
  reqID: { type: String, default: "Undefined" },
  resID: { type: String, default: "Undefined" },
  outcome: { type: String, default: "Undefined" },
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
