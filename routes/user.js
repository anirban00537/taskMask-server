const express = require("express");
const router = express.Router();
const { searchUser } = require("../controllers/user.js");
router.get("/search/:keyword", searchUser);

module.exports = router;
