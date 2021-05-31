const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
