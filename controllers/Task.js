const Task = require("../model/Task.js");

exports.getTasks = getTasks = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const userTasks = await Task.find({ uid: id }).sort({ _id: -1 });
  res.json(userTasks);
};

exports.createTask = createTask = async (req, res) => {
  const task = req.body;
  // const newTask = new Task(task);

  try {
    // await newTask.save();
    // res.status(200).json(newTask);
    console.log(task);
    res.json(task);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.UpdateTask = UpdateTask = async (req, res) => {
  const task = req.body;

  if (task.complete == false) {
    const updateTask = await Task.findOneAndUpdate(
      { id: task.id },
      { complete: true },
      {
        new: true,
      }
    );
    res.status(200).json(updateTask);
  } else {
    const updateTask = await Task.findOneAndUpdate(
      { id: task.id },
      { complete: false },
      {
        new: true,
      }
    );
    res.status(200).json(updateTask);
  }

  try {
  } catch (error) {}
};

exports.deleteTask = deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
