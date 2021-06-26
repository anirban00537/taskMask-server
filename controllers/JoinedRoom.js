const RoomModel = require("../model/Room.js");

exports.getRoomByMemberID = getRoomByMemberID = async (req, res) => {
  const { memberID } = req.params;
  try {
    const Rooms = await RoomModel.find({ "roomMembers.userID": memberID });
    res.status(200).json(Rooms);
  } catch (error) {
    console.log(error);
  }
};
