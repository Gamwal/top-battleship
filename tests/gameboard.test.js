const { Gameboard } = require("../src/modules/gameboard");

let gameboard;

beforeAll(() => {
  gameboard = new Gameboard();
});

test("Check first position", () => {
  expect(gameboard.grid[0][0]).toBe(0);
});
