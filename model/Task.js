const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
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
},  { timestamps: true });

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
