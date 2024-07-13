class Gameboard {
    constructor() {
        this.board = [];
        this.boardSize = 3;

        for (let i = 0; i < this.boardSize; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.boardSize; j++) {
                this.board[i][j] = 0;
            }
        }
    }
}

module.exports = Gameboard;