function gameBoard() {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return function (row, column, playerMarker) {
    if (row >= 0 && row < 3 && column >= 0 && column < 3) {
      if (board[row][column] === "") {
        board[row][column] = playerMarker;
        if (playerMarker === "X") {
          console.log(
            `${player1.name} Inserted ${playerMarker} at (${row}, ${column})`
          );
        } else if (playerMarker === "O") {
          console.log(
            `${player2.name} Inserted ${playerMarker} at (${row}, ${column})`
          );
        }
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
  let player = { name, marker };
  return player;
}
const player1 = createPlayer("OLYM", "X");
const player2 = createPlayer("MYLO", "O");

function insertMark() {
  const board = gameBoard();
  return function (row, column, playerMarker) {
    let mark = board(row, column, playerMarker);
    return mark;
  };
}
function playGame() {
  let playing = insertMark();
  console.log(playing(1, 2, player1.marker));
  console.log(playing(1, 1, player2.marker));
}

playGame();
