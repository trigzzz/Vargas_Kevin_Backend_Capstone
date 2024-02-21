const WorkoutLog = require('../models/workoutLog');

exports.createWorkoutLog = async (req, res) => {
    console.log(req.user)
    try {
        const workoutLog = new WorkoutLog({
            ...req.body,
            user: req.user.id 
        });
        await workoutLog.save();
        res.status(201).json(workoutLog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};


exports.getAllWorkoutLogs = async (req, res) => {
    try {
        const workoutLogs = await WorkoutLog.find({ user: req.user.id });
        res.status(200).json(workoutLogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getWorkoutLogById = async (req, res) => {
    try {
        const workoutLog = await WorkoutLog.findById(req.params.id);
        if (!workoutLog) {
            return res.status(404).json({ message: 'Workout Log not found' });
        }
        res.status(200).json(workoutLog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateWorkoutLog = async (req, res) => {
    try {
        const workoutLog = await WorkoutLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workoutLog) {
            return res.status(404).json({ message: 'Workout Log not found' });
        }
        res.status(200).json(workoutLog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteWorkoutLog = async (req, res) => {
    try {
      const log = await WorkoutLog.findByIdAndDelete(req.params.id);
  
      if (!log) {
        return res.status(404).json({ message: 'Workout log not found' });
      }
  
      res.json({ message: 'Workout log deleted successfully' });
    } catch (error) {
      console.error("Error deleting workout log:", error);
      res.status(500).json({ message: 'Error deleting workout log' });
    }
  };