function gameBoard() {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let turn = true;

  function switchTurn() {
    turn = !turn;
    console.log(`Player ${turn ? 1 : 2} Turn`);
  }

  function insertMark(row, column, playerMarker, player) {
    if (game === null) {
      console.log("The game is over. Start a new game");
      return board;
    }
    //For some reason, it only works when I use 2 instead of 0, it think 2 === 0
    if (numberOfTurns < 2) {
      console.log("GAMEOVER");
      resetBoard(board);
      refreshButtonContent();
      numberOfTurns = 9;
    }
    if ((turn && playerMarker === "X") || (!turn && playerMarker === "O")) {
      board[row][column] = playerMarker;
      console.log(
        `${player.name} Inserted ${playerMarker} at (${row}, ${column})`
      );
      --numberOfTurns;
      switchTurn();
      console.log(numberOfTurns);
    } else {
      console.log(`Player ${turn ? 2 : 1} turn`);
    }
    return board;
  }

  function getBoard() {
    return board;
  }

  return { insertMark, getBoard, resetBoard };
}
let numberOfTurns = 9;
function createPlayer(name, marker) {
  return { name, marker };
}

const player1 = createPlayer("OLYM", "X");
const player2 = createPlayer("MYLO", "O");

function playGame() {
  const { insertMark, getBoard } = gameBoard();
  let currentPlayer = player1;
  let playing = (row, column) => {
    insertMark(row, column, currentPlayer.marker, currentPlayer);
    switchCurrentPlayer();
    return getBoard();
  };

  function switchCurrentPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }

  function getCurrentPlayer() {
    return currentPlayer;
  }
  return { playing, switchCurrentPlayer, getCurrentPlayer };
}
let game = playGame();
let player1Win = 0;
let player2Win = 0;
const WINNING_STREAK = 3;

function gameOver() {}
function winnerStreak(updatedBoard, player) {
  if (player1Win !== WINNING_STREAK || player2Win !== WINNING_STREAK) {
    resetBoard(updatedBoard);
    refreshButtonContent();
  }
  if (player1Win === WINNING_STREAK || player2Win === WINNING_STREAK) {
    console.clear();
    console.log(`${player.name} IS THE WINNER`);
    console.log("GAMEOVER");
    game = null;
  }
}

function resetBoard(updatedBoard) {
  console.log("RESET BOARD");

  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      updatedBoard[row][column] = "";
    }
  }
  numberOfTurns = 9;
  console.log(updatedBoard);
}

function checkPlayerWinner(updatedBoard, player) {
  if (player.marker === "X") {
    console.log(`${player.name} winstreak:${++player1Win}`);
    player2Win = 0;
    winnerStreak(updatedBoard, player);
    displayScore(player1Win, player2Win);
  } else if (player.marker === "O") {
    console.log(`${player.name} winstreak:${++player2Win}`);
    player1Win = 0;
    winnerStreak(updatedBoard, player);
    displayScore(player1Win, player2Win);
  }
  function getplayer1Win() {
    return player1Win;
  }
  function getplayer2Win() {
    return player2Win;
  }

  return { getplayer1Win, getplayer2Win };
}
function test() {
  let check = checkPlayerWinner(null, player2.marker);
  let win1 = check.getplayer1Win;
  console.log(win1());
}

function checkWinner(updatedBoard, player) {
  for (let row = 0; row < 3; row++) {
    if (
      updatedBoard[row][0] !== "" &&
      updatedBoard[row][0] === updatedBoard[row][1] &&
      updatedBoard[row][1] === updatedBoard[row][2]
    ) {
      checkPlayerWinner(updatedBoard, player);
      return updatedBoard[row][0];
    }
  }
  for (let column = 0; column < 3; column++) {
    if (
      updatedBoard[0][column] !== "" &&
      updatedBoard[0][column] === updatedBoard[1][column] &&
      updatedBoard[1][column] === updatedBoard[2][column]
    ) {
      checkPlayerWinner(updatedBoard, player);
      return updatedBoard[0][column];
    }
  }
  if (
    updatedBoard[0][0] !== "" &&
    updatedBoard[0][0] === updatedBoard[1][1] &&
    updatedBoard[1][1] === updatedBoard[2][2]
  ) {
    checkPlayerWinner(updatedBoard, player);
    return updatedBoard[0][0];
  }
  if (
    updatedBoard[0][2] !== "" &&
    updatedBoard[0][2] === updatedBoard[1][1] &&
    updatedBoard[1][1] === updatedBoard[2][0]
  ) {
    checkPlayerWinner(updatedBoard, player);
    return updatedBoard[0][2];
  }
  return null;
}

function play(row, column) {
  if (game === null) {
    console.log("The game is over. Start a new game.");
    return;
  }
  let playing = game.playing;
  let getCurrentPlayer = game.getCurrentPlayer();
  let updatedBoard = playing(row, column);
  console.log(updatedBoard);
  checkWinner(updatedBoard, getCurrentPlayer);

  return { updatedBoard };
}
function diplayButtons() {
  const getGameBoard = gameBoard();
  const board = getGameBoard.getBoard();
  const display = document.getElementById("display");

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const button = document.createElement("button");
      button.textContent = board[i][j];
      button.dataset.row = i;
      button.dataset.column = j;
      button.classList = "playableButton";
      display.appendChild(button);
    }
  }
}
diplayButtons();

function buttonsController() {
  const buttons = document.querySelectorAll("button");
  let getCurrentPlayer = game.getCurrentPlayer;
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (game !== null) {
        let row = e.target.getAttribute("data-row");
        let column = e.target.getAttribute("data-column");
        if (button.textContent === "") {
          button.textContent = getCurrentPlayer().marker;
          play(row, column);
        }
      }
    });
  });
}
buttonsController();

function topDisplayContent() {
  let player1Turn = document.querySelector(".player1Turn");
  player1Turn.textContent = `${player1.name} : ${player1.marker}`;

  let winstreak = document.querySelector(".winningStreak");
  winstreak.textContent = `0 : 0`;

  let player2Turn = document.querySelector(".player2Turn");
  player2Turn.textContent = `${player2.name} : ${player2.marker}`;
}
topDisplayContent();

function displayScore(updatedplayer1Score, updatedplayer2Score) {
  let winstreak = document.querySelector(".winningStreak");
  winstreak.textContent = `${updatedplayer1Score} : ${updatedplayer2Score}`;
}

function refreshButtonContent() {
  let grabAllButton = document.querySelectorAll(".playableButton");
  let getGameBoard = gameBoard();
  let board = getGameBoard.getBoard;
  grabAllButton.forEach((button) => {
    setTimeout(() => {
      button.textContent = "";
      for (let i = 0; i > 3; i++) {
        for (let j = 0; j > 3; i++) {
          board[i][j] = "";
          return board;
        }
      }
      console.clear();
    }, 400);
  });
}

function restartButton() {
  const bottomDisplay = document.querySelector(".bottomDisplay");
  const restartButton = document.createElement("button");
  restartButton.textContent = "RESTART GAME";
  restartButton.id = "restartButton";
  bottomDisplay.append(restartButton);

  restartButton.addEventListener("click", () => {
    location.reload();
  });
}
restartButton();
