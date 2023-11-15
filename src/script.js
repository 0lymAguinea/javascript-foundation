function gameBoard() {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return function (row, column, playerMarker, player) {
    if (row >= 0 && row < 3 && column >= 0 && column < 3) {
      if (board[row][column] === "") {
        board[row][column] = playerMarker;
        console.log(
          `${player.name} Inserted ${playerMarker} at (${row}, ${column})`
        );
      } else {
        console.log(`The location (${row}, ${column}) is already occupied.`);
      }
    } else {
      console.log(
        "Invalid location. Please provide valid row and column indices."
      );
    }
    return board;
  };
}
function createPlayer(name, marker) {
  return { name, marker };
}
const player1 = createPlayer("OLYM", "X");
const player2 = createPlayer("MYLO", "O");

function insertMark(board, row, column, player) {
  return board(row, column, player.marker, player);
}
function playGame() {
  const board = gameBoard();
  let playing = (row, column, player) => insertMark(board, row, column, player);
  console.log(playing(1, 2, player1));
  console.log(playing(1, 1, player2));
}
playGame();
