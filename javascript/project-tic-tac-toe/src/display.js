// src/display.js

const DisplayController = {
    renderBoard(board) {
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
          gameBoardDiv.appendChild(cellDiv);
        });
      });
    },
  };
  
  export default DisplayController;
  