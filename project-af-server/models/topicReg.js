const mongoose = require("mongoose");

const topicRegSchema = mongoose.Schema({
  leaderName: {
    type: String,
    required: true,
  },
  leaderEmail: {
    type: String,
    required: true,
  },
  leaderPhone: {
    type: String,
    required: true,
  },
  accadamicYear: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  studyLevel: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  courceCode: {
    type: String,
    required: true,
  },
  supervisorName: {
    type: String,
    required: true,
  },
  supervisorEmail: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
    default: "Under Review",
  },
});

module.exports = mongoose.model("TopicReg", topicRegSchema);
