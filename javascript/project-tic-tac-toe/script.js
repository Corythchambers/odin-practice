
// Store gameboard as an array in gameboard object
    // gameboard is a 2d array, with 3 spaces on x and y
    // the value stored at  0 0 will either be an X or an O
function Gameboard() {
    this.board = [];
    this.boardSize = 3;

    for(let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = j
        }
    }
    console.log(board)
}


// players will be stored in objects
    // Player will need a name
    // player will need a symbol
function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
}


// game object
function Game(){
    const gameBoard = new Gameboard();
    const player1 = new Player("Joe", 'X');
    const player2 = new Player("Blow", 'O');
    const players = [player1, player2];

    const winnerFound = false;
    let currentPlayerIndex = 0;
    while (winnerFound) {
        const player = players[currentPlayerIndex];
        makeMove(player, gameBoard);
        winnerFound = checkForWinner(gameBoard);
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    }
    console.log("want to play again?")
}

function makeMove(player, gameBoard) {
    // ask player for a number twice
    // store the player's symbol at that coordinate
    const x = prompt("Enter your x coordinate 0-2:");
    const y = prompt("Enter your y coordinate 0-2:");
    gameBoard.board[x][y] = player.symbol;
}
    //  Start game
        // Not needed immediately but get player info at start of game
        // start with two players then increase
        // allow board size to change depending on input
    // Create an array to store the player objects
    // create a winnerFound flag
    // this can be a while loop
        // inner for loop that lops through the player objects
            // have the first player in the object take a turn
                // for console the player will enter two numbers 0-2
                // we will store their symbol at those coordinates
            // we check to see if there are 3 in a row, up, down, or diagnal
                // if yes we set the winner flag
            // return winner message
    // ask if they want to play again


    const newGame = new Game();