const RoomTask = require("../model/RoomTask.js");

exports.getRoomTaskByadminUid = getRoomTaskByadminUid = async (req, res) => {
  const { adminUid, roomid } = req.params;
  try {
    const roomTasks = await RoomTask.find({
      adminUid: adminUid,
      roomId: roomid,
    })
      .populate("assignedTaskUser")
      .sort({ _id: -1 });
    res.status(200).json(roomTasks);
  } catch (error) {
    console.log(error);
  }
};

exports.createRoomTask = createRoomTask = async (req, res) => {
  const { adminUid, roomid } = req.params;
  const RoomTaskData = req.body;
  const newRoomTask = RoomTask(RoomTaskData);
  try {
    await newRoomTask.save();
    const roomTasks = await RoomTask.find({
      adminUid: adminUid,
      roomId: roomid,
    })
      .populate("assignedTaskUser")
      .sort({ _id: -1 });
    res.status(200).send(roomTasks);
  } catch (error) {
    console.log(error);
  }
};

exports.updateRoomTask = updateRoomTask = async (req, res) => {
  const { id } = req.params;
  const RoomTaskData = req.body;
  try {
    // await RoomTask.findByIdAndUpdate(id, RoomTaskData);
    const updatedRoomTask = await RoomTask.findByIdAndUpdate(id, RoomTaskData, {
      new: true,
    });
    res.status(200).json(updatedRoomTask);
  } catch (error) {}
};

exports.deleteRoomTask = deleteRoomTask = async (req, res) => {
  const { taskid } = req.params;
  try {
    await RoomTask.findByIdAndDelete({ _id: taskid });
    res.json({ id: taskid });
  } catch (error) {}
};
