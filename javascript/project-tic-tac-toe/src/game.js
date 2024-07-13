const Gameboard = require('./gameboard');
const Player = require('./player');

class Game {
    constructor() {
        this.gameBoard = new Gameboard();
        this.players = [new Player('Joe', 'X'), new Player('Blow', 'O')];
        this.winnerFound = false;
        this.currentPlayerIndex = 0;
    }

    start() {
        while (!this.winnerFound) {
            const player = this.players[this.currentPlayerIndex];
            // get input from player
            console.log(`${this.players[this.currentPlayerIndex].name}'s turn`)
            const x = Math.floor(Math.random() * this.gameBoard.boardSize);
            const y = Math.floor(Math.random() * this.gameBoard.boardSize);
            if (this.makeMove(player, x, y)) {
                this.winnerFound = this.checkForWinner(player.symbol);
                this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
            }
        }
        console.log("Winner!");
        this.gameBoard.displayBoard();
        console.log("Want to play again?")
        // TODO: add logic for playing again
    }

    makeMove(player, x, y) {
        if (x >= this.gameBoard.boardSize || y >= this.gameBoard.boardSize) {
            console.log(`${x}, ${y} is NOT a valid move, try again`)
            return false;
        } else if (this.gameBoard.board[x][y] === this.gameBoard.emptySymbol) {
            console.log(`${x}, ${y} is a valid move`)
            this.gameBoard.board[x][y] = player.symbol;
            return true;
        } else {
            console.log(`${x}, ${y} is NOT a valid move, try again`)
            return false;
        }
    }

    checkForWinner(symbol) {
        const board = this.gameBoard.board;

        for (let i = 0; i < 3; i++) {
            if ((board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) ||
                (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol)) {
                return true;
            }
        }

        if ((board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
            (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)) {
            return true;
        }

        return false;
    }
}

module.exports = Game