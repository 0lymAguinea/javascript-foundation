/* eslint-disable max-classes-per-file */
class Ship {
  constructor(name) {
    this.name = name;

    this.shipCategory = {
      carrier: {
        length: 5,
        numberOfHits: 0,
        sunk: false,
      },
      battleship: {
        length: 4,
        numberOfHits: 0,
        sunk: false,
      },
      cruiser: {
        length: 3,
        numberOfHits: 0,
        sunk: false,
      },
      submarine: {
        length: 3,
        numberOfHits: 0,
        sunk: false,
      },
      destroyer: {
        length: 2,
        numberOfHits: 0,
        sunk: false,
      },
    };
  }

  hit(shipType) {
    if (
      Object.hasOwn(this.shipCategory, shipType) &&
      this.shipCategory[shipType].sunk !== true
    ) {
      this.shipCategory[shipType].numberOfHits += 1;
      this.isSunk(this.shipCategory, shipType);
    }
  }

  isSunk(hitShip, shipType) {
    if (hitShip[shipType].numberOfHits === hitShip[shipType].length) {
      hitShip[shipType].sunk = true;
    }
  }
}

class Gameboard {
  constructor(ship) {
    this.ship = ship;
    this.board = this.boardMap();
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
          this.board[coordinateX][coordinateY + i] = ship.length;
        } else if (orientation === "vertical") {
          this.board[coordinateX + i][coordinateY] = ship.length;
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
}

const player1Ships = new Ship();
const player2Ships = new Ship();

const player1Board = new Gameboard(player1Ships);
const player2Board = new Gameboard(player2Ships);

player1Board.placeShip(1, 5, player1Ships.shipCategory.carrier, "horizontal");

console.log(player1Board);
console.log(player2Board);
