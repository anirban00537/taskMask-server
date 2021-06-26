const express = require("express");
const { getRoomByMemberID } = require("../controllers/JoinedRoom");
const router = express.Router();

router.get("/:memberID", getRoomByMemberID);

module.exports = router;
