import Game from './game.js';

document.getElementById('start-game').addEventListener('click', () => {
    const playerName = document.getElementById('player_name').value || 'Player';
    const game = new Game(playerName);
})