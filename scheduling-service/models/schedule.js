const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  scheduleDate: { type: String, required: true }, //need to be changed to Date type after testing
  userEmail: { type: String, required: true },
  catalogTitle: { type: String, required: true },
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;
