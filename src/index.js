/* eslint-disable max-classes-per-file */
import playerForm from "./scripts/playerForm";
import Ship from "./scripts/ship";

function areAllShipSunk(playerShip) {
  const ships = Object.values(playerShip.shipCategory);
  return ships.every((ship) => ship.sunk);
}

playerForm();
