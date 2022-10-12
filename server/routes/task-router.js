const express = require('express');
const TaskController = require('../controllers/task-controller');

const router = express.Router();

router.post('/task', TaskController.createTask);
router.put('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);
router.get('/task/:id', TaskController.getTaskById);
router.get('/tasks', TaskController.getTasks);
router.get('/tasks/project/:id', TaskController.getTasksByProjectId);

module.exports = router;
