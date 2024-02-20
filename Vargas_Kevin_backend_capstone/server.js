require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db-connection');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


// Connect to database
connectDB();

const app = express();

// Middlewares
app.use(cors()); // Use cors to handle cross-origin requests
app.use(helmet()); // Use helmet to secure Express headers
app.use(morgan('tiny')); // HTTP request logger
app.use(express.json()); // Body parser for JSON payloads

// Route imports
const videosRoutes = require('./routes/videos');
const workoutLogsRoutes = require('./routes/workoutLogs');
const communityPostsRoutes = require('./routes/communityPosts');
const plansRoutes = require('./routes/plans');
const usersRoutes = require('./routes/users');

// Use routes
app.use('/api/videos', videosRoutes);
app.use('/api/workoutLogs', workoutLogsRoutes);
app.use('/api/communityPosts', communityPostsRoutes);
app.use('/api/plans', plansRoutes);
app.use('/api/users', usersRoutes);

// Basic route for testing server is up
app.get('/', (req, res) => {
  res.send('Floodz Training API is running...');
});

//PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
