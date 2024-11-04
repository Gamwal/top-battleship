const { Ship } = require("./ship");

class Gameboard {
  #ships;
  #grid;

  constructor(size = 10) {
    this.#grid = this.#createMatrix(size, size);
    this.#ships = [];
  }

  #createMatrix(n, m, fillValue = null) {
    return Array.from({ length: n }, () => Array(m).fill(fillValue));
  }

  addShip(start, length, orientation = 0) {
    let newShip = new Ship(length);

    if (this.#checkPositions(start, length, orientation)) {
      this.#ships.push(newShip);

      for (let i = 0; i < length; i++) {
        if (orientation === 0) {
          // Horizontal Orientation
          this.#grid[start[0]][start[1] + i] = this.#ships.length - 1;
        } else if (orientation === 1) {
          // Vertical Orientation
          this.#grid[start[0] + i][start[1]] = this.#ships.length - 1;
        }
      }
    }
  }

  #checkPositions(start, length, orientation) {
    for (let i = 0; i < length; i++) {
      if (orientation === 0) {
        if (this.#grid[start[0]][start[1] + i]) return false;
      } else if (orientation === 1) {
        if (this.#grid[start[0] + i][start[1]]) return false;
      }
    }
    return true;
  }

  get grid() {
    return this.#grid;
  }
}

module.exports = { Gameboard };
