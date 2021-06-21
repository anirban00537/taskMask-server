const Task = require("../model/Task.js");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);
exports.getTasks = getTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const userTasks = await Task.find({ uid: id }).sort({ _id: -1 });

    res.json(userTasks);
  } catch (error) {
    console.log(error);
  }
};

exports.createTask = createTask = async (req, res) => {
  const task = req.body;
  const newTask = new Task(task);

  try {
    await newTask.save();
    res.status(200).json(newTask);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.UpdateTask = UpdateTask = async (req, res) => {
  const { status, id } = req.params;

  try {
    if (status == "false") {
      const updateTask = await Task.findByIdAndUpdate(
        { _id: id },
        { complete: false },
        {
          new: true,
        }
      );
      res.status(200).json(updateTask);
    } else {
      const updateTask = await Task.findByIdAndUpdate(
        { _id: id },
        { complete: true },
        {
          new: true,
        }
      );

      res.status(200).json(updateTask);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTask = deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.json({ id });
  } catch (error) {
    console.log(error);
  }
};
