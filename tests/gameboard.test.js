const { Gameboard } = require("../src/modules/gameboard");

let gameboard;

beforeAll(() => {
  gameboard = new Gameboard();
  gameboard.addShip([2, 2], 4, 1);
  gameboard.addShip([3, 2], 4, 1);
});

afterAll(() => {
  gameboard = null;
});

test("Check empty position", () => {
  expect(gameboard.grid[0][0]).toBe(null); // An empty spot
});

test("Check first ship position", () => {
  expect(gameboard.grid[2][2]).toBe(0); // First ship should be at this position
});

test("Check last position of first ship", () => {
  expect(gameboard.grid[5][2]).toBe(0); // Last part of the first ship
});

test("Verify non-overlapping positions", () => {
  expect(gameboard.grid[3][3]).toBe(null); // Ensure empty cell in proximity
});

test("Verify that ships can be attacked", () => {
  gameboard.receiveAttack([2, 2]);
  expect(gameboard.grid[2][2]).toBe("H");
});

test("Verify that empty grids can be attacked", () => {
  gameboard.receiveAttack([0, 2]);
  expect(gameboard.grid[0][2]).toBe("h");
});

test("Verify that all ships have not been sunk", () => {
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("Verify that all ships have been sunk", () => {
  gameboard.receiveAttack([3, 2]);
  gameboard.receiveAttack([4, 2]);
  gameboard.receiveAttack([5, 2]);
  gameboard.receiveAttack([6, 2]);
  expect(gameboard.allShipsSunk()).toBe(true);
});
