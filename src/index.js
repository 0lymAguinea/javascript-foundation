/* eslint-disable max-classes-per-file */
import displayGame from "./scripts/gameLogic";
import playerForm from "./scripts/playerForm";
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

playerForm();
