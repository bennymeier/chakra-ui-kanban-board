const Task = require('../models/task-model');

const createTask = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a task',
    });
  }

  try {
    const task = new Task(body);
    await task.save();
    return res.status(201).json({
      success: true,
      data: task,
      message: 'Task created!',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
      message: 'Task not created!',
    });
  }
};

const updateTask = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  try {
    await Task.updateOne({ _id: req.params.id }, body);
    return res.status(200).json({
      success: true,
      message: 'Task updated!',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error,
      message: 'Task not updated!',
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });

    if (!task) {
      return res.status(404).json({ success: false, error: `Task not found` });
    }

    return res.status(200).json({ success: true, id: task._id });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    if (!task) {
      return res.status(404).json({ success: false, error: `Task not found` });
    }

    return res.status(200).json({ success: true, data: task });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ index: 'asc' });

    return res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const getTasksByProjectId = async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.id }).sort({
      index: 'asc',
    });
    return res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  getTasks,
  getTasksByProjectId,
};
