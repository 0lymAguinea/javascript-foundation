function gameBoard() {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let turn = true;
  let numberOfTurns = 9;

  function switchTurn() {
    turn = !turn;
    console.log(`Player ${turn ? 1 : 2} Turn`);
  }

  function insertMark(row, column, playerMarker, player) {
    if (row < 0 || row >= 3 || column < 0 || column >= 3) {
      console.log(
        "Invalid location. Please provide valid row and column indices."
      );
      return board;
    }
    if (numberOfTurns <= 0) {
      console.log("GAMEOVER");
      return board;
    }
    if (board[row][column] !== "") {
      console.log(`The location (${row}, ${column}) is already occupied. `);
      return board;
    }
    if ((turn && playerMarker === "X") || (!turn && playerMarker === "O")) {
      board[row][column] = playerMarker;
      console.log(
        `${player.name} Inserted ${playerMarker} at (${row}, ${column})`
      );
      numberOfTurns--;
      switchTurn();
    } else {
      console.log(`Player ${turn ? 2 : 1} turn`);
    }
    return board;
  }

  function getBoard() {
    return board;
  }

  return { insertMark, getBoard };
}

function createPlayer(name, marker) {
  return { name, marker };
}

const player1 = createPlayer("OLYM", "X");
const player2 = createPlayer("MYLO", "O");

function playGame() {
  const { insertMark, getBoard } = gameBoard();
  let playing = (row, column, player) => {
    insertMark(row, column, player.marker, player);
    return getBoard();
  };
  return { playing };
}
const game = playGame();

function checkWinner(updatedBoard, player) {
  for (let row = 0; row < 3; row++) {
    if (
      updatedBoard[row][0] !== "" &&
      updatedBoard[row][0] === updatedBoard[row][1] &&
      updatedBoard[row][1] === updatedBoard[row][2]
    ) {
      console.log(`${player.name} is the winner`);
      return updatedBoard[row][0];
    }
  }
  for (let column = 0; column < 3; column++) {
    if (
      updatedBoard[0][column] !== "" &&
      updatedBoard[0][column] === updatedBoard[1][column] &&
      updatedBoard[1][column] === updatedBoard[2][column]
    ) {
      console.log(`${player.name} is the winner`);
      return updatedBoard[0][column];
    }
  }
  if (
    updatedBoard[0][0] !== "" &&
    updatedBoard[0][0] === updatedBoard[1][1] &&
    updatedBoard[1][1] === updatedBoard[2][2]
  ) {
    console.log(`${player.name} is the winner`);
    return updatedBoard[0][0];
  }
  if (
    updatedBoard[0][2] !== "" &&
    updatedBoard[0][2] === updatedBoard[1][1] &&
    updatedBoard[1][1] === updatedBoard[2][0]
  ) {
    console.log(`${player.name} is the winner`);
    return updatedBoard[0][2];
  }
  return null;
}

function play(row, column, player) {
  let playing = game.playing;
  let updatedBoard = playing(row, column, player);
  console.log(updatedBoard);
  checkWinner(updatedBoard, player);
}
