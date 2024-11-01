const { Ship } = require("../src/modules/ship");

let ship;

beforeAll(() => {
  ship = new Ship(5);
});

afterAll(() => {
  ship = null;
});

test("Returns length of ship", () => {
  expect(ship.length).toBe(5);
});

test("Check if ship has been hit", () => {
  ship.hit();
  ship.hit();
  expect(ship.numberOfHits).toBe(2);
});

test("Check if ship can been hit after full damage", () => {
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.numberOfHits).toBe(5);
});
