const { ModuleFilenameHelpers } = require("webpack");

class Ship {
  #length;
  #numberOfHits;
  #hasSunk;

  constructor(length) {
    this.#length = length;
    this.#numberOfHits = 0;
    this.#hasSunk = false;
  }

  get length() {
    return this.#length;
  }

  get numberOfHits() {
    return this.#numberOfHits;
  }

  get hasSunk() {
    return this.#hasSunk;
  }

  hasBeenHit() {
    if (!this.#hasSunk) this.#numberOfHits++;
    this.willSink();
  }

  willSink() {
    if (this.#numberOfHits === this.#length) this.#hasSunk = true;
  }
}

module.exports = { Ship };
