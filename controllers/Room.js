const RoomModel = require("../model/Room.js");

exports.getRoomByOwnerid = getRoomByOwnerid = async (req, res) => {
  const { roomAdminID } = req.params;
  try {
    const Rooms = await RoomModel.find({ roomAdminID: roomAdminID }).populate({
      path: "roomMembers",
      populate: { path: "userID" },
    });

    res.status(200).json(Rooms);
  } catch (error) {
    console.log(error);
  }
};
exports.createRoom = createRoom = async (req, res) => {
  const roomData = req.body;
  const newRoom = RoomModel(roomData);
  try {
    await newRoom.save();
    res.status(200).send(newRoom);
  } catch (error) {
    console.log(error);
  }
};

exports.getRoomInfoByRoomID = getRoomInfoByRoomID = async (req, res) => {
  const { roomid } = req.params;
  try {
    const roomInfo = await RoomModel.findById({ _id: roomid })
      .populate("roomAdminID")
      .populate({ path: "roomMembers", populate: { path: "userID" } });

    res.status(200).json(roomInfo);
  } catch (error) {
    console.log(error);
  }
};
exports.updateRoom = updateRoomTask = async (req, res) => {
  const { roomid } = req.params;
  const updatedRoomData = req.body;

  try {
    const updatedRoom = await RoomModel.findByIdAndUpdate(
      roomid,
      updatedRoomData,
      {
        new: true,
      }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {}
};
