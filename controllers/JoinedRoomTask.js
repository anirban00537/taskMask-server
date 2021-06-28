const RoomTask = require("../model/RoomTask.js");

exports.getRoomTaskByuserAndRoomID = getRoomTaskByuserAndRoomID = async (
  req,
  res
) => {
  const { userid, roomid } = req.params;
  try {
    const roomTasks = await RoomTask.find({
      assignedTaskUser: userid,
      roomId: roomid,
    })
      .populate("assignedTaskUser")
      .sort({ _id: -1 });
    res.status(200).json(roomTasks);
  } catch (error) {
    console.log(error);
  }
};

exports.updateJoinedRooTask = updateJoinedRooTask = async (req, res) => {
  const { taskID } = req.params;
  const JoinedRoomTask = req.body;
  try {
    const updatedJoinedRoomTask = await RoomTask.findByIdAndUpdate(
      taskID,
      JoinedRoomTask,
      { new: true }
    );
    res.status(200).json(updatedJoinedRoomTask);
    console.log(JoinedRoomTask);
  } catch (error) {}
};
