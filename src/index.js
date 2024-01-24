/* eslint-disable max-classes-per-file */
import Ship from "./scripts/ship";
import Player from "./scripts/player";
import Gameboard from "./scripts/gameBoard";

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

export const player1Board = new Gameboard(player1Ships);
export const player2Board = new Gameboard(player2Ships);

player1Board.placeShip(0, 5, player1Carrier, "horizontal");
player2Board.placeShip(2, 5, player2Battleship, "horizontal");
const player1 = new Player("Lym", true);
const player2 = new Player("Myl", false);

function displayPlayer1Board() {
  const display = document.getElementById("player1Board");
  const { board } = player1Board;

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      const button = document.createElement("button");
      button.dataset.row = i;
      button.dataset.column = j;
      button.classList = "player1Buttons";
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
      button.classList = "player2Buttons";
      display.appendChild(button);
    }
  }
}

function buttonsController(
  buttons,
  currentBoard,
  opposingBoard,
  currentPlayer,
  opposingPlayer
) {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (currentPlayer.turn) {
        const row = e.target.getAttribute("data-row");
        const column = e.target.getAttribute("data-column");

        opposingBoard.receiveAttack(row, column, currentBoard, button);
        currentBoard.switchPlayer(currentPlayer, opposingPlayer);

        button.disabled = true;

        initializeButtons();
        console.log(player1Board, player2Board);
      }
    });
  });
}

function initializeButtons() {
  const player1Buttons = document.querySelectorAll(".player1Buttons");
  const player2Buttons = document.querySelectorAll(".player2Buttons");

  if (player1.turn === true && player2.turn === false) {
    buttonsController(
      player1Buttons,
      player1Board,
      player2Board,
      player1,
      player2
    );
  } else if (player1.turn === false && player2.turn === true) {
    buttonsController(
      player2Buttons,
      player2Board,
      player1Board,
      player2,
      player1
    );
  }
}

displayPlayer1Board();
displayPlayer2Board();

initializeButtons();
