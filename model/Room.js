const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
  roomName: {
    type: String,
    required: true,
  },
  roomAdminID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  roomMembers: [{ userID: mongoose.Schema.Types.ObjectId, ref: "user" }],
  roomTasks: [{ roomTaskID: mongoose.Schema.Types.ObjectId, ref: "roomTask" }],
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
