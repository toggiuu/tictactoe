const express = require('express');
const Game = require('../models/gameModel');
const router = express.Router();

// 게임 시작
router.post('/start', async (req, res) => {
    const game = new Game({
        player1: req.body.player1,
        player2: req.body.player2,
        currentTurn: req.body.player1,
        board: Array(9).fill(null),
        winner: '',
        draw: false
    });
    await game.save();
    res.status(201).send(game);
});

// 게임 상태 업데이트
router.put('/move', async (req, res) => {
    const { gameId, player, index } = req.body;
    let game = await Game.findById(gameId);
    game.board[index] = player;
    // 승리 검증 로직 추가 필요
    await game.save();
    res.status(200).send(game);
});

module.exports = router;
