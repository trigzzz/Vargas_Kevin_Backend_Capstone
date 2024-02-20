const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  skillLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] },
  duration: Number, // in minutes
  category: { type: String, enum: ['Shooting', 'Dribbling', 'Defense', 'Fitness', 'Strategy'] },
  url: { type: String, required: true }, // URL to the video content
});

module.exports = mongoose.model('Video', VideoSchema);
