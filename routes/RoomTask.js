const express = require("express");
const {
  getRoomTaskByadminUid,
  createRoomTask,
  updateRoomTask,
  deleteRoomTask,
} = require("../controllers/RoomTask");
const router = express.Router();

router.get("/:adminUid/:roomid", getRoomTaskByadminUid);
router.post("/:adminUid/:roomid", createRoomTask);
router.patch("/", updateRoomTask);
router.delete("/:taskid", deleteRoomTask);
module.exports = router;
