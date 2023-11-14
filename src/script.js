function GameBoard(row, column, marker) {
  this.board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  board[row][column] = marker;
}

function createPlayers(name, marker) {
  let player = { name, marker };
  return player;
}
const player1 = createPlayers("Olym", "X");
const player2 = createPlayers("Mylo", "O");
GameBoard(0, 0, player1.marker);
