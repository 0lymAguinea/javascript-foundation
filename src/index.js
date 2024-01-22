/* eslint-disable max-classes-per-file */
import Ship from "./scripts/ship";
import Player from "./scripts/player";

class Gameboard {
  constructor(ship) {
    this.ship = ship;
    this.board = this.boardMap();
    this.shotsFiredCount = 0;
    this.missedAttackCount = 0;
  }

  boardMap() {
    const row = 10;
    const col = 10;
    const board = [];

    for (let i = 0; i < row; i += 1) {
      board[i] = [];
      for (let j = 0; j < col; j += 1) {
        board[i][j] = 0;
      }
    }

    return board;
  }

  placeShip(coordinateX, coordinateY, ship, orientation) {
    if (
      this.isValidCoordinate(coordinateX, coordinateY) &&
      this.isValidShipPlacement(coordinateX, coordinateY, ship, orientation)
    ) {
      for (let i = 0; i < ship.length; i += 1) {
        if (orientation === "horizontal") {
          this.board[coordinateX][coordinateY + i] = ship.name;
        } else if (orientation === "vertical") {
          this.board[coordinateX + i][coordinateY] = ship.name;
        }
      }
    } else {
      console.log("Invalid placement");
    }
  }

  isValidCoordinate(coordinateX, coordinateY) {
    const row = this.board.length;
    const col = this.board[0].length;
    return (
      coordinateX >= 0 &&
      coordinateX < row &&
      coordinateY >= 0 &&
      coordinateY < col
    );
  }

  isValidShipPlacement(coordinateX, coordinateY, ship, orientation) {
    if (orientation === "horizontal") {
      return coordinateY + ship.length <= this.board[0].length;
    }
    if (orientation === "vertical") {
      return coordinateX + ship.length <= this.board.length;
    }
  }

  receiveAttack(coordinateX, coordinateY, playerShip) {
    if (
      this.board[coordinateX][coordinateY] === "X" ||
      this.board[coordinateX][coordinateY] === "O"
    ) {
      console.log("YOU ALREADY HIT THIS");
    } else if (
      this.board[coordinateX][coordinateY] !== undefined &&
      this.board[coordinateX][coordinateY] !== 0
    ) {
      const shipHit = this.board[coordinateX][coordinateY];
      this.board[coordinateX][coordinateY] = "X";
      this.ship.hit(shipHit);
      this.shotsFired(playerShip);
    } else {
      this.board[coordinateX][coordinateY] = "O";
      this.shotsFired(playerShip);
      this.missedAttack(playerShip);
    }
  }

  shotsFired(playerShip) {
    playerShip.shotsFiredCount += 1;

    return playerShip.shotsFiredCount;
  }

  missedAttack(playerShip) {
    this.missedAttackCount += 1;

    return this.missedAttackCount;
  }

  getAccuracy() {
    const totalShots = this.shotsFiredCount + this.missedAttackCount;

    if (totalShots === 0) {
      return 0;
    }

    const hitRatio = this.shotsFiredCount / totalShots;

    return hitRatio;
  }

  checkIfAllShipSunk() {
    const array = Object.values(this.ship.shipCategory);
    if (
      array.map((ship) => ship.sunk).every((sunk) => sunk === true) === true
    ) {
      console.log("ALL SHIP SUNK!");
    } else {
      console.log("NOT YET");
    }
  }
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
