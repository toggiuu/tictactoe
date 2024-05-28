const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    player1: String,
    player2: String,
    currentTurn: String,
    board: [{ type: String }],
    winner: String,
    draw: Boolean
});

module.exports = mongoose.model('Game', gameSchema);
