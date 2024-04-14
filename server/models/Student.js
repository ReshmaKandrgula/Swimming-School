const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  phone: String,
  grade: String,
  password: String,
});

const Student = mongoose.model("students", StudentSchema);
module.exports = Student;
