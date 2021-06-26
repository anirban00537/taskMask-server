const express = require("express");
const { getRoomTaskByuserAndRoomID } = require("../controllers/JoinedRoomTask");
const router = express.Router();

router.get("/:userid/:roomid", getRoomTaskByuserAndRoomID);
module.exports = router;
