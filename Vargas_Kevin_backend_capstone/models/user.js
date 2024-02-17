const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skillLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  goals: String,
  // Other fields as necessary
});
module.exports = mongoose.model('User', UserSchema);
