/* eslint-disable max-classes-per-file */
import Ship from "./scripts/ship";
import Player from "./scripts/player";
import Gameboard from "./scripts/gameBoard";

function gameLoop(player1Ships, player2Ships) {
  while (!areAllShipSunk(player1Ships) && !areAllShipSunk(player2Ships)) {
    player1Board.checkplayerTurn(player1, player2);
    player2Board.checkplayerTurn(player1, player2);
  }
}

function areAllShipSunk(playerShip) {
  const ships = Object.values(playerShip.shipCategory);
  return ships.every((ship) => ship.sunk);
}

const player1Ships = new Ship();
const player2Ships = new Ship();

const player1Carrier = player1Ships.shipCategory.carrier;
const player1Battleship = player1Ships.shipCategory.battleship;
const player1Cruiser = player1Ships.shipCategory.cruiser;
const player1Submarine = player1Ships.shipCategory.submarine;
const player1Destroyer = player1Ships.shipCategory.destroyer;

const player2Carrier = player2Ships.shipCategory.carrier;
const player2Battleship = player2Ships.shipCategory.battleship;
const player2Cruiser = player2Ships.shipCategory.cruiser;
const player2Submarine = player2Ships.shipCategory.submarine;
const player2Destroyer = player2Ships.shipCategory.destroyer;

const player1Board = new Gameboard(player1Ships);
const player2Board = new Gameboard(player2Ships);

player1Board.placeShip(1, 5, player1Carrier, "horizontal");
player2Board.placeShip(2, 5, player2Destroyer, "horizontal");
const player1 = new Player("Lym", true);
const player2 = new Player("Myl", false);

console.log(player1Board);
console.log(player2Board);

function displayPlayer1Board() {
  const display = document.getElementById("player1Board");
  const { board } = player1Board;

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      const button = document.createElement("button");
      button.dataset.row = i;
      button.dataset.column = j;
      button.classList = "player1Cell";
      display.appendChild(button);
    }
  }
}

function displayPlayer2Board() {
  const display = document.getElementById("player2Board");
  const { board } = player2Board;

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      const button = document.createElement("button");
      button.dataset.row = i;
      button.dataset.column = j;
      button.classList = "player2Cell";
      display.appendChild(button);
    }
  }
}

function player1BoardButtonController() {
  const buttons = document.querySelectorAll(".player1Cell");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const row = e.target.getAttribute("data-row");
      const column = e.target.getAttribute("data-column");

      player2Board.receiveAttack(row, column, player1Board);

      console.log(player1Board);
      console.log(player2Board);
    });
  });
}

displayPlayer1Board();
displayPlayer2Board();

player1BoardButtonController();
