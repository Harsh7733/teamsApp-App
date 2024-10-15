const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/taskController');

// Route for creating a new task
router.post('/', taskController.createTask);

// Route for getting all tasks
router.get('/', taskController.getAllTasks);

// Route for getting a task by ID
router.get('/:id', taskController.getTaskById);

// Route for getting tasks by section ID
router.get('/section/:sectionID', taskController.getTasksBySectionID);

// Route for getting tasks with section ID null
router.get('/section/null', taskController.getTasksWithNullSection);

// Route for updating a task by ID
router.put('/:id', taskController.updateTaskById);

// Route for deleting a task by ID (soft delete)
router.delete('/tasks/:id', taskController.deleteTaskById);

// Route for getting completed tasks
router.get('/status/completed', taskController.getCompletedTasks);

// Get Tasks Assigned to a user by UserID
router.get('/assignedTasks/:userId', taskController.getAssignedTasksToUserByUserId);

// Get Tasks by Taskname (Search)
router.get('/search/task', taskController.getTasksByTaskName);

// Get deleted tasks
router.get('/tasks/bin', taskController.getDeletedTasks);

// Restore task
router.post('/tasks/bin/:id/restore', taskController.restoreTaskById);

//Get Non Deleted Non Completed Task
router.get('/nonCompleted/nonDeleted', taskController.getNonCompletedNonDeletedTasks);

//Delete Task Permanently
router.delete('/deletePermanently/:id', taskController.deleteTaskPermanently);

//Send Task to QA
router.put('/sendToQA/:id', taskController.sendTaskToQA);

module.exports = router;