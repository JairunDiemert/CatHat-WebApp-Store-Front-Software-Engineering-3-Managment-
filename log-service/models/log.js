const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  time: { type: Date, required: true },
  sendingService: { type: String, required: true },
  routeName: { type: String, required: true },
  requestID: { type: String },
  responseID: { type: String },
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
