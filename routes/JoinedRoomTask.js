const express = require("express");
const {
  getRoomTaskByuserAndRoomID,
  updateJoinedRooTask,
} = require("../controllers/JoinedRoomTask");
const router = express.Router();

router.get("/:userid/:roomid", getRoomTaskByuserAndRoomID);
router.patch("/:taskID", updateJoinedRooTask);

module.exports = router;
