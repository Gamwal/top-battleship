const { Gameboard } = require("../src/modules/gameboard");

let gameboard;

beforeAll(() => {
  gameboard = new Gameboard();
  gameboard.addShip([2, 2], 4, 1);
  console.log(gameboard.grid);
});

test("Check first position", () => {
  expect(gameboard.grid[0][0]).toBe(null);
});

test("Check ship position", () => {
  expect(gameboard.grid[2][2]).toBe(0);
});
