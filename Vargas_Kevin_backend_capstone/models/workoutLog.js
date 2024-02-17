const mongoose = require('mongoose');

const WorkoutLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  duration: Number, // in minutes
  typeOfTraining: String,
  feedback: String, // User's feedback about the workout
});

module.exports = mongoose.model('WorkoutLog', WorkoutLogSchema);
