const Player = require('../src/player');

test('Player initializes with name and symbol', () => {
    const player = new Player('Joe', 'X');
    expect(player.name).toBe('Joe');
    expect(player.symbol).toBe('X');
});