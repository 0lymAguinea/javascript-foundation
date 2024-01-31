import { player1, player2 } from "./player";
import { player1Board, player2Board } from "./gameBoard";

function displayPlayer1Board() {
  const container = document.querySelector(".container");
  const display = document.createElement("div");
  display.id = "player1Board";
  container.append(display);
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
  const container = document.querySelector(".container");
  const display = document.createElement("div");
  display.id = "player2Board";
  container.append(display);
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
        opposingBoard.checkIfAllShipSunk(currentPlayer);
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

export function disabledPlayersButton() {
  const player1Buttons = document.querySelectorAll(".player1Buttons");
  const player2Buttons = document.querySelectorAll(".player2Buttons");

  player1Buttons.forEach((button) => {
    button.disabled = true;
  });

  player2Buttons.forEach((button) => {
    button.disabled = true;
  });
}
function createWinnerContainer() {
  const winningContainer = document.createElement("div");
  winningContainer.id = "winningContainer";
  document.body.append(winningContainer);
}

function winnerContainerMessage(winningPlayer) {
  const p = document.createElement("p");
  p.textContent = `WE HAVE A WINNER! ${winningPlayer.name} WINS THE GAME`;
}

function createRestartButton() {
  const button = document.createElement("button");
  button.textContent = "New game";
  button.id = "resetGameButton";

  button.addEventListener("click", () => {
    location.reload();
  });
}

function displayRestartButton() {
  const container = document.getElementById("winningContainer");
  const button = document.getElementById("resetGameButton");

  container.append(button);
}

export function announceWinner(winningPlayer) {
  createWinnerContainer();
  winnerContainerMessage(winningPlayer);
  createRestartButton();
  displayRestartButton();
}

export default function displayGame() {
  displayPlayer1Board();
  displayPlayer2Board();

  initializeButtons();
}
