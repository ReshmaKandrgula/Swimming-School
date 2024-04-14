const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  _id: { String },
  days: { Array, Array, Array },
  coaches: [String, String, String, String, String, String, String, String],
  gradeLevel: [Number, Number, Number, Number, Number],
});

const schoolModel = mongoose.model("schooldatas", schoolSchema);
module.exports = schoolModel;
