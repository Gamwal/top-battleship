import "./style.css";
import { createGrid, addShipstoGameboard, handleClick } from "./modules/utils";
import { Player } from "./modules/player";

const playerOne = new Player();
const playerTwo = new Player();

addShipstoGameboard(playerOne.gameboard);
addShipstoGameboard(playerTwo.gameboard);

const playerOneGrid = createGrid(playerOne.gameboard.grid, 0);
const playerTwoGrid = createGrid(playerTwo.gameboard.grid, 1);

const gameHolder = document.querySelector("#gameboard-holder");

gameHolder.appendChild(playerOneGrid);
gameHolder.appendChild(playerTwoGrid);

const allCells = document.querySelectorAll(".cell");
allCells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    handleClick(event);
    damageShip(event);
    checkWinner(playerOne, playerTwo);
  });
});

function damageShip(event) {
  if (event.target.textContent !== "") {
    const cellInfo = event.target.id.split("_");
    const gridID = cellInfo[1];
    const [row, col] = [cellInfo[2], cellInfo[3]];
    const shipID = event.target.textContent;

    if (gridID === "0" && playerOne.gameboard.ships[shipID].isSunk === false) {
      playerOne.gameboard.ships[shipID].hit();
    } else if (
      gridID === "1" &&
      playerTwo.gameboard.ships[shipID].isSunk === false
    ) {
      playerTwo.gameboard.ships[shipID].hit();
    }
  }
}

function checkWinner(playerOne, playerTwo) {
  if (playerOne.gameboard.allShipsSunk()) console.log("Player 2 Wins");
  else if (playerTwo.gameboard.allShipsSunk()) console.log("Player 1 Wins");
}

// window.addEventListener("load", () => {});
