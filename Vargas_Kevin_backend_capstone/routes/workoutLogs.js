const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const workoutLogsController = require('../controllers/workoutLogsController');


router.post('/', auth, workoutLogsController.createWorkoutLog);
router.get('/', auth, workoutLogsController.getAllWorkoutLogs);
router.get('/:id', auth, workoutLogsController.getWorkoutLogById);
router.put('/:id', auth, workoutLogsController.updateWorkoutLog);
router.delete('/:id', auth, workoutLogsController.deleteWorkoutLog);



module.exports = router;
