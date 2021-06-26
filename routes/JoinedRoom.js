const express = require("express");
const {
  getRoomByMemberID,
  getRoomTaskByuserAndRoomID,
} = require("../controllers/JoinedRoom");
const router = express.Router();

router.get("/:memberID", getRoomByMemberID);

module.exports = router;
