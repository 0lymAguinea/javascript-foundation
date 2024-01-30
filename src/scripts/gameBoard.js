import { player1Ships, player2Ships } from "./ship";
import { disabledPlayersButton, announceWinner } from "./gameLogic";
import { notReadyButtonAction, resetWrongShipInput } from "./playerForm";

export default class Gameboard {
  constructor(ship, name) {
    this.name = name;
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

  resetBoard() {
    const row = 10;
    const col = 10;
    const board = [];

    for (let i = 0; i < row; i += 1) {
      board[i] = [];
      for (let j = 0; j < col; j += 1) {
        board[i][j] = "";
      }
    }
    this.board = board;

    return this.board;
  }

  placeShip(coordinateX, coordinateY, ship, orientation, name) {
    if (
      this.isValidCoordinate(coordinateX, coordinateY) &&
      this.isValidShipPlacement(
        coordinateX,
        coordinateY,
        ship,
        orientation,
        name
      )
    ) {
      for (let i = 0; i < ship.length; i += 1) {
        let cellValue;
        if (orientation === "horizontal") {
          cellValue = this.board[coordinateX][coordinateY + i];
        } else if (orientation === "vertical") {
          cellValue = this.board[coordinateX + i][coordinateY];
        }

        if (cellValue !== "") {
          notReadyButtonAction();
          resetWrongShipInput(ship, name);
          return false;
        }

        if (orientation === "horizontal") {
          this.board[coordinateX][coordinateY + i] = ship.name;
        } else if (orientation === "vertical") {
          this.board[coordinateX + i][coordinateY] = ship.name;
        }
      }
      return true;
    }
    return false;
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

  isValidShipPlacement(coordinateX, coordinateY, ship, orientation, name) {
    for (let i = 0; i < ship.length; i += 1) {
      if (orientation === "horizontal") {
        if (
          coordinateY + i >= this.board[0].length ||
          this.board[coordinateX][coordinateY + i] !== ""
        ) {
          notReadyButtonAction();
          resetWrongShipInput(ship, name);
          return false; // Invalid placement
        }
      } else if (orientation === "vertical") {
        if (
          coordinateX + i >= this.board.length ||
          this.board[coordinateX + i][coordinateY] !== ""
        ) {
          notReadyButtonAction();
          resetWrongShipInput(ship, name);
          return false; // Invalid placement
        }
      }
    }

    return true; // Valid placement
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

  checkIfAllShipSunk(playerWinner) {
    const array = Object.values(this.ship.shipCategory);
    if (
      array.map((ship) => ship.sunk).every((sunk) => sunk === true) === true
    ) {
      disabledPlayersButton();
      announceWinner(playerWinner);
    }
  }

  switchPlayer(player1, player2) {
    player1.turn = !player1.turn;
    player2.turn = !player2.turn;
  }
}

export const player1Board = new Gameboard(player1Ships, "player1");
export const player2Board = new Gameboard(player2Ships, "player2");
