const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/gameRoutes');

const app = express();

app.use(express.json());
app.use('/api/game', gameRoutes);

mongoose.connect('mongodb://localhost/tictactoe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = app;
