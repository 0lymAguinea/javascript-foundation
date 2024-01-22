export default class Player {
  constructor(name, playerTurn = false) {
    this.name = name;
    this.turn = playerTurn;
  }
}
