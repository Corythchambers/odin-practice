
const Gameboard = require('../src/gameboard');

test('Gameboard initializes with a 3x3 grid of zeros', () => {
    const gameBoard = new Gameboard();
    expect(gameBoard.board).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);
});