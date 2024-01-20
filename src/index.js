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

const player1 = new Ship();
const player2 = new Ship();

console.log(player1);
console.log(player2);
