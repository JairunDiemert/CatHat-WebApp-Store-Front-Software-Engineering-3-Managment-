const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  token: { type: String, required: true },
  scheduleDate: { type: String, required: true }, //need to be changed to Date type after testing
  userEmail: { type: String, required: true },
  shippingCart: [mongoose.Schema.Types.Mixed],
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;
