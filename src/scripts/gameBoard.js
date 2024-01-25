import { player1Ships, player2Ships } from "./ship";

export default class Gameboard {
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
        board[i][j] = "";
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

  receiveAttack(coordinateX, coordinateY, playerShip, button) {
    const shipNames = Object.values(playerShip.ship.shipCategory).map(
      (ship) => ship.name
    );

    if (shipNames.includes(this.board[coordinateX][coordinateY])) {
      const hittedShip = this.board[coordinateX][coordinateY];
      this.board[coordinateX][coordinateY] = "X";
      button.textContent = "X";
      this.shotsFired(playerShip);
      this.ship.hit(hittedShip);
    } else {
      this.board[coordinateX][coordinateY] = "O";
      this.shotsFired(playerShip);
      button.textContent = "O";
      this.missedAttack(playerShip);
    }
  }

  shotsFired(playerShip) {
    playerShip.shotsFiredCount += 1;

    return playerShip.shotsFiredCount;
  }

  missedAttack(playerShip) {
    playerShip.missedAttackCount += 1;

    return playerShip.missedAttackCount;
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

  switchPlayer(player1, player2) {
    player1.turn = !player1.turn;
    player2.turn = !player2.turn;
  }
}

export const player1Board = new Gameboard(player1Ships);
export const player2Board = new Gameboard(player2Ships);
