import "./style.css";
import { createGrid, addShipstoGameboard } from "./modules/utils";
import { Player } from "./modules/player";

const playerOne = new Player();
const playerTwo = new Player();

addShipstoGameboard(playerOne.gameboard);
addShipstoGameboard(playerTwo.gameboard);

const playerOneGrid = createGrid(playerOne.gameboard.grid);
const playerTwoGrid = createGrid(playerTwo.gameboard.grid);

const gameHolder = document.querySelector("#gameboard-holder");

gameHolder.appendChild(playerOneGrid);
gameHolder.appendChild(playerTwoGrid);

window.addEventListener("load", () => {});
