const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  intendedSkillLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  summary: String,
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }], // Assuming 'workouts' refer to 'Video' objects
});

module.exports = mongoose.model('Plan', PlanSchema);
