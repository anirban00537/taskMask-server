const mongoose = require("mongoose");

const RoomTaskSchema = mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "roomTask",
    },
    adminUid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    assignedTaskUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    title: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
      default: 0,
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
  },
  { timestamps: true }
);

const RoomTask = mongoose.model("RoomTask", RoomTaskSchema);
module.exports = RoomTask;
