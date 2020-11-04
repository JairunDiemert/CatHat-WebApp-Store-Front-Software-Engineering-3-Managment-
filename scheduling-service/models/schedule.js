const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  scheduleDate: { type: Date, required: true },
  userEmail: { type: String, required: true },
  catalogTitle: { type: String, required: true },
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;
