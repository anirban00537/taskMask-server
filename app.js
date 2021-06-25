const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Task = require("./routes/Task.js");
const Auth = require("./routes/auth.js");
const Room = require("./routes/Room.js");
const RoomTask = require("./routes/RoomTask.js");
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/task", Task);
app.use("/", Auth);
app.use("/room", Room);
app.use("/roomtask", RoomTask);
const connctionUrl =
  "mongodb+srv://anirban00537:anirban00537@cluster0.rsvp4.mongodb.net/taskmanagement?retryWrites=true&w=majority";
mongoose
  .connect(connctionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(5000, () => {
  console.log("connected");
});
