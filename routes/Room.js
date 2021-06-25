const express = require("express");
const {
  getRoomByOwnerid,
  createRoom,
  getRoomInfoByRoomID,
  updateRoom,
} = require("../controllers/Room");
const router = express.Router();

router.get("/:roomAdminID", getRoomByOwnerid);
router.get("/single/:roomid", getRoomInfoByRoomID);
router.post("/", createRoom);
router.patch("/update/:roomid", updateRoom);

module.exports = router;
