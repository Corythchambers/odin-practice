
import Gameboard from "../src/gameboard";

test('Gameboard initializes with a 3x3 grid of zeros', () => {
    const gameBoard = new Gameboard();
    expect(gameBoard.board).toEqual([
        [gameBoard.emptySymbol, gameBoard.emptySymbol, gameBoard.emptySymbol],
        [gameBoard.emptySymbol, gameBoard.emptySymbol, gameBoard.emptySymbol],
        [gameBoard.emptySymbol, gameBoard.emptySymbol, gameBoard.emptySymbol],
    ]);
});