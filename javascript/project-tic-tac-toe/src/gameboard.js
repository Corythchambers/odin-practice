class Gameboard {
    constructor() {
        this.board = [];
        this.boardSize = 3;
        this.emptySymbol = '-'

        for (let i = 0; i < this.boardSize; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.boardSize; j++) {
                this.board[i][j] = this.emptySymbol;
            }
        }
    }

    displayBoard() {
        for (const row of this.board) {
            console.log(`${row}\n`);
        }
    }
}

export default Gameboard;