export default class Player {
  constructor(name, playerTurn = false) {
    this.name = name;
    this.turn = playerTurn;
  }
}

export const player1 = new Player("Lym", true);
export const player2 = new Player("Myl", false);
