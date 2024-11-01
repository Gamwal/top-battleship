class Ship {
  #length;
  #numberOfHits;
  #isSunk;

  constructor(length) {
    this.#length = length;
    this.#numberOfHits = 0;
    this.#isSunk = false;
  }

  get length() {
    return this.#length;
  }

  get numberOfHits() {
    return this.#numberOfHits;
  }

  get isSunk() {
    return this.#isSunk;
  }

  hit() {
    if (!this.#isSunk) this.#numberOfHits++;
    if (this.#numberOfHits === this.#length) this.#isSunk = true;
  }
}

module.exports = { Ship };
