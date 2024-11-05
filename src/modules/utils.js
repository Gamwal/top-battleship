function createGrid(grid, gridID) {
  const nRows = grid.length;
  const nCols = grid[0].length;
  const gridContainer = document.createElement("div");
  gridContainer.id = gridID;
  gridContainer.classList.add("grid-container");

  for (let i = 0; i < nRows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row-div");

    for (let j = 0; j < nCols; j++) {
      const cell = document.createElement("div");

      cell.textContent = grid[i][j];
      cell.id = `cell_${gridID}_${i}_${j}`;
      cell.classList.add("cell");

      rowDiv.appendChild(cell);
    }
    gridContainer.appendChild(rowDiv);
  }
  return gridContainer;
}

function shipLengthGenerator() {
  return Math.floor(Math.random() * 4 + 1);
}

function coordinateGenerator(nRows = 10, nCols = 10) {
  const x = Math.floor(Math.random() * nRows);
  const y = Math.floor(Math.random() * nCols);

  return [x, y];
}

function randomizeOrientation() {
  return Math.round(Math.random());
}

function addShipstoGameboard(gameboard, nShips = 10) {
  while (gameboard.ships.length < nShips) {
    const start = coordinateGenerator();
    const length = shipLengthGenerator();
    const orientation = randomizeOrientation();

    gameboard.addShip(start, length, orientation);
  }
}

function handleClick(event) {
  event.target.classList.add("clicked-cell");
  event.target.removeEventListener("click", handleClick);
}

module.exports = { createGrid, addShipstoGameboard, handleClick };
