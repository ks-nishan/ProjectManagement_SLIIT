const mongoose = require("mongoose");

const topicschema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  GroupId: { type: String, require: true },
  Tittle: { type: String, require: true },
  Status: { type: String, require: true },
  Feedback: { type: String, require: true },
  Supervisor: { type: String, require: true },
  Cosupervisor: { type: String, require: true },
  L_name: { type: String, require: true },
  L_email: { type: String, require: true },
  L_phone: { type: String, require: true },
  Description: { type: String, require: true },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});
module.exports = mongoose.model("Topic", topicschema);
