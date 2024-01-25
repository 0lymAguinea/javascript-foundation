export default class Ship {
  constructor() {
    this.shipCategory = {
      carrier: {
        name: "carrier",
        length: 5,
        numberOfHits: 0,
        sunk: false,
      },
      battleship: {
        name: "battleship",
        length: 4,
        numberOfHits: 0,
        sunk: false,
      },
      cruiser: {
        name: "cruiser",
        length: 3,
        numberOfHits: 0,
        sunk: false,
      },
      submarine: {
        name: "submarine",
        length: 3,
        numberOfHits: 0,
        sunk: false,
      },
      destroyer: {
        name: "destroyer",
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

export const player1Ships = new Ship();
export const player2Ships = new Ship();
