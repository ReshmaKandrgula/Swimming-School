const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");
const schoolModel = require("./models/Data");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/student");

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

app.get("/getSlots", (req, res) => {
  schoolModel
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  Student.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  Student.findOne({ name: name }).then((student) => {
    if (student) {
      if (student.password === password) {
        res.json("Success");
      }
    } else {
      res.json("No Record exists");
    }
  });
});
app.post("/register", (req, res) => {
  Student.create(req.body)
    .then((students) => {
      res.json(students);
      console.log(students);
    })
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
