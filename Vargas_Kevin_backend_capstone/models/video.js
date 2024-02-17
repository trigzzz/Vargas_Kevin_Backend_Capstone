const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  skillLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  duration: Number, // in minutes
  category: { type: String, enum: ['shooting', 'dribbling', 'defense', 'fitness', 'strategy'] },
  url: { type: String, required: true }, // URL to the video content
});

module.exports = mongoose.model('Video', VideoSchema);
