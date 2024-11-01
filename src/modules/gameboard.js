const Ship = require("./ship");

class Gameboard {
  #ships;
  #grid;

  constructor() {
    this.#grid = this.#createMatrix(10, 10);
    this.#ships = [];
  }

  #createMatrix(n, m, fillValue = 0) {
    return Array.from({ length: n }, () => Array(m).fill(fillValue));
  }

  addShip(start, length, orientation) {
    newShip = new Ship(length);
    this.#ships.push([newShip, start, orientation]);
  }

  get grid() {
    return this.#grid;
  }
}

module.exports = { Gameboard };
