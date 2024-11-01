const { experiments } = require("webpack");
const { Ship } = require("./index");

let ship;

beforeAll(() => {
  ship = new Ship(5);
});

test("Returns length of ship", () => {
  expect(ship.length).toBe(5);
});

test("Check if ship has been hit", () => {
  ship.hasBeenHit();
  ship.hasBeenHit();
  expect(ship.numberOfHits).toBe(2);
});

test("Check if ship can been hit after full damage", () => {
  ship.hasBeenHit();
  ship.hasBeenHit();
  ship.hasBeenHit();
  ship.hasBeenHit();
  ship.hasBeenHit();
  ship.hasBeenHit();
  expect(ship.numberOfHits).toBe(5);
});
