import Gameboard from './gameboard.js';
import Player from './player.js';
import DisplayController from './display.js';

class Game {
    constructor(playerName) {
        this.gameBoard = new Gameboard();
        this.players = [new Player(playerName, 'X'), new Player('Computer Joe', 'O')];
        this.winnerFound = false;
        this.currentPlayerIndex = 0;
        this.tie = false;
        this.handleCellClick = this.handleCellClick.bind(this);
        DisplayController.renderBoard(this.gameBoard.board, this.handleCellClick);
        DisplayController.updatePlayerTurn(this.players[this.currentPlayerIndex].name);
    }

    handleCellClick(rowIndex, cellIndex) {
        const player = this.players[this.currentPlayerIndex];
        if (player.name !== 'Computer Joe' && this.makeMove(player, rowIndex, cellIndex)) {
            this.afterMove(player);
        }
    }

    computerMove() {
        const player = this.players[this.currentPlayerIndex];
        let x, y;
        do {
            x = Math.floor(Math.random() * this.gameBoard.boardSize);
            y = Math.floor(Math.random() * this.gameBoard.boardSize);
        } while (!this.makeMove(player, x, y));

        this.afterMove(player);
    }

    afterMove(player) {
        DisplayController.renderBoard(this.gameBoard.board, this.handleCellClick);
        this.winnerFound = this.checkForWinner(player.symbol);
        if (!this.winnerFound) {
            this.tie = this.checkForTie();
            if (this.tie) {
                alert("It's a tie!");
            } else {
                this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
                DisplayController.updatePlayerTurn(this.players[this.currentPlayerIndex].name);
                if (this.players[this.currentPlayerIndex].name === 'Computer Joe') {
                    this.computerMove();
                }
            }
        } else {
            alert(`${player.name} wins!`);
        }
    }

    makeMove(player, x, y) {
        if (x >= this.gameBoard.boardSize || y >= this.gameBoard.boardSize) {
            console.log(`${x}, ${y} is NOT a valid move, try again`);
            return false;
        } else if (this.gameBoard.board[x][y] === this.gameBoard.emptySymbol) {
            console.log(`${x}, ${y} is a valid move`);
            this.gameBoard.board[x][y] = player.symbol;
            return true;
        } else {
            console.log(`${x}, ${y} is NOT a valid move, try again`);
            return false;
        }
    }

    checkForWinner(symbol) {
        const board = this.gameBoard.board;

        // Check rows and columns
        for (let i = 0; i < this.gameBoard.boardSize; i++) {
            if ((board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) ||
                (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol)) {
                return true;
            }
        }

        // Check diagonals
        if ((board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
            (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)) {
            return true;
        }

        return false;
    }

    checkForTie() {
        for (let i = 0; i < this.gameBoard.boardSize; i++) {
            for (let j = 0; j < this.gameBoard.boardSize; j++) {
                if (this.gameBoard.board[i][j] === this.gameBoard.emptySymbol) {
                    return false;
                }
            }
        }
        return true;
    }
}

export default Game;
