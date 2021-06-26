const express = require("express");
const {
  getRoomByOwnerid,
  createRoom,
  getRoomInfoByRoomID,
  updateRoom,
  removeMemberFromRoom,
} = require("../controllers/Room");
const router = express.Router();

router.get("/:roomAdminID", getRoomByOwnerid);
router.get("/single/:roomid", getRoomInfoByRoomID);
router.post("/", createRoom);
router.patch("/update/:roomid", updateRoom);
router.patch("/update/delete/:roomid", removeMemberFromRoom);

module.exports = router;
