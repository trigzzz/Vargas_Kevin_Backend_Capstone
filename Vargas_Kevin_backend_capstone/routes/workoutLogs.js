const express = require('express');
const router = express.Router();
const workoutLogsController = require('../controllers/workoutLogsController');

router.post('/', workoutLogsController.createWorkoutLog);
router.get('/', workoutLogsController.getAllWorkoutLogs);
router.get('/:id', workoutLogsController.getWorkoutLogById);
router.put('/:id', workoutLogsController.updateWorkoutLog);
router.delete('/:id', workoutLogsController.deleteWorkoutLog);

module.exports = router;
