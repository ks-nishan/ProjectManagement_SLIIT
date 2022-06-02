const mongoose = require("mongoose");
const submissionSchema = new mongoose.Schema({
 
  file: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model("Submission", submissionSchema);