const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
    },
    roomAdminID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    roomMembers: [
      {
        userID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      },
    ],
    roomTasks: [
      {
        roomTaskID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "RoomTask",
        },
      },
    ],
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
