import { player1, player2 } from "./player";
import { player1Board, player2Board } from "./gameBoard";

function displayPlayer1Board() {
  const display = document.getElementById("player1Board");
  const { board } = player1Board;

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      const button = document.createElement("button");
      button.dataset.row = i;
      button.dataset.column = j;
      button.classList = "player1Buttons";
      display.appendChild(button);
    }
  }
}

function displayPlayer2Board() {
  const display = document.getElementById("player2Board");
  const { board } = player2Board;

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      const button = document.createElement("button");
      button.dataset.row = i;
      button.dataset.column = j;
      button.classList = "player2Buttons";
      display.appendChild(button);
    }
  }
}

function buttonsController(
  buttons,
  currentBoard,
  opposingBoard,
  currentPlayer,
  opposingPlayer
) {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (currentPlayer.turn) {
        const row = e.target.getAttribute("data-row");
        const column = e.target.getAttribute("data-column");

        opposingBoard.receiveAttack(row, column, currentBoard, button);
        currentBoard.switchPlayer(currentPlayer, opposingPlayer);

        button.disabled = true;

        initializeButtons();
        console.log(player1Board, player2Board);
      }
    });
  });
}

function initializeButtons() {
  const player1Buttons = document.querySelectorAll(".player1Buttons");
  const player2Buttons = document.querySelectorAll(".player2Buttons");

  if (player1.turn === true && player2.turn === false) {
    buttonsController(
      player1Buttons,
      player1Board,
      player2Board,
      player1,
      player2
    );
  } else if (player1.turn === false && player2.turn === true) {
    buttonsController(
      player2Buttons,
      player2Board,
      player1Board,
      player2,
      player1
    );
  }
}

export default function displayGame() {
  displayPlayer1Board();
  displayPlayer2Board();

  initializeButtons();
}
