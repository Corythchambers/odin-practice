// test/game.test.js
import Gameboard from '../src/gameboard';
import Game from '../src/game';
import Player from '../src/player';
import DisplayController from '../src/display';

describe('DisplayController', () => {
  let gameBoardDiv;
  const board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X'],
  ];

  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = '<div id="gameBoard"></div>';
    gameBoardDiv = document.getElementById('gameBoard');
  });

  test('renders the game board correctly', () => {
    DisplayController.renderBoard(board);

    // Check if the gameBoardDiv is not empty
    expect(gameBoardDiv.innerHTML).not.toBe('');

    // Check if the gameBoardDiv has 9 cells
    expect(gameBoardDiv.children.length).toBe(9);

    // Check the content of the cells
    board.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const cellDiv = gameBoardDiv.children[rowIndex * 3 + cellIndex];
        expect(cellDiv.textContent).toBe(cell);
        expect(cellDiv.dataset.row).toBe(rowIndex.toString());
        expect(cellDiv.dataset.cell).toBe(cellIndex.toString());
        expect(cellDiv.classList.contains('cell')).toBe(true);
      });
    });
  });
});

describe('Game', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="gameBoard"></div>';
  });

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
  });
});
