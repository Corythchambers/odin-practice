const Game = require('../src/game');
const Player = require('../src/player');
const Gameboard = require('../src/gameboard');

test('Game initializes with a gameboard and two players', () => {
    const game = new Game();
    expect(game.gameBoard).toBeInstanceOf(Gameboard);
    expect(game.players.length).toBe(2);
    expect(game.players[0]).toBeInstanceOf(Player);
    expect(game.players[1]).toBeInstanceOf(Player);
});

test('Game makeMove updates the board correctly', () => {
    const game = new Game();
    const player = game.players[0];
    const moveMade = game.makeMove(player, 0, 0);
    expect(moveMade).toBe(true);
    expect(game.gameBoard.board[0][0]).toBe(player.symbol);
});

test('Game checkForWinner identifies a winning condition', () => {
    const game = new Game();
    const player = game.players[0];
    game.makeMove(player, 0, 0);
    game.makeMove(player, 0, 1);
    game.makeMove(player, 0, 2);
    const winner = game.checkForWinner(player.symbol);
    expect(winner).toBe(true);
});

test('Game checkForTie identifies a tie condition', () => {
    const game = new Game();
    const player = game.players[0];
    for (let i = 0; i < game.gameBoard.boardSize; i++) {
        for (let j = 0; j < game.gameBoard.boardSize; j++) {
            game.makeMove(player, i, j);
        }
    }
    const tie = game.checkForTie();
    expect(tie).toBe(true);
})