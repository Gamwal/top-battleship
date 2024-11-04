const { Gameboard } = require("./gameboard");

class Player {
  #gameboard;

  constructor() {
    this.#gameboard = new Gameboard();
  }

  get gameboard() {
    return this.#gameboard;
  }
}

module.exports = { Player };
