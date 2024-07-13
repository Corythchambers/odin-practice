const DisplayController = {
  renderBoard(board, onClickCell) {
      const gameBoardDiv = document.getElementById('gameBoard');
      if (!gameBoardDiv) {
          throw new Error('gameBoard element not found');
      }
      gameBoardDiv.innerHTML = '';

      board.forEach((row, rowIndex) => {
          row.forEach((cell, cellIndex) => {
              const cellDiv = document.createElement('div');
              cellDiv.classList.add('cell');
              cellDiv.textContent = cell;
              cellDiv.dataset.row = rowIndex;
              cellDiv.dataset.cell = cellIndex;
              cellDiv.addEventListener('click', () => onClickCell(rowIndex, cellIndex));
              gameBoardDiv.appendChild(cellDiv);
          });
      });
  },

  updatePlayerTurn(playerName) { // Corrected function parameter
      const turnDisplay = document.getElementById('player-turn');
      if (turnDisplay) {
          turnDisplay.textContent = `${playerName}'s turn`; // Corrected typo here
      }
  }

  // display winner
};

export default DisplayController;
