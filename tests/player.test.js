const { Player } = require("../src/modules/player");

let player;

beforeAll(() => {
  player = new Player();
});

test("Player has his own board", () => {
  expect(player.gameboard).not.toBe(null);
});

test("Player's board can add ships", () => {
  player.gameboard.addShip([0, 0], 5, 0);
  expect(player.gameboard.grid[0][0]).toBe(0);
});
