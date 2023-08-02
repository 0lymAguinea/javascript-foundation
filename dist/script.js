const choices = ["Rock", "Paper", "Scissor"];

let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper");
let btnScissor = document.getElementById("scissor");

const div = document.createElement("div");
div.className = "results";

const announce = document.createElement("div");
announce.className = "announce";

const playerSide = document.createElement("div");
const playerScoreBoard = document.createElement("p");
playerSide.className = "playerSide";
playerScoreBoard.textContent = "Player score: 0";

const computerSide = document.createElement("div");
const computerScoreBoard = document.createElement("p");
computerSide.className = "computerSide";
computerScoreBoard.textContent = "Computer score: 0";

div.appendChild(announce);
div.appendChild(playerSide);
div.appendChild(computerSide);

document.body.appendChild(div);

let gameOver = false;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return (randomNum = choices[Math.floor(Math.random() * choices.length)]);
}

function checkGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      announce.textContent = "PLAYER WINS";
    } else if (playerScore < computerScore) {
      announce.textContent = "COMPUTER WINS";
    }
    gameOver = true;
    btnRock.removeEventListener("click", () => {});
    btnPaper.removeEventListener("click", () => {});
    btnScissor.removeEventListener("click", () => {});
  }
}
function updateScoreBoard() {
  playerScoreBoard.textContent = `Player score: ${playerScore}`;
  computerScoreBoard.textContent = `Computer score: ${computerScore}`;
}
function playRound(playerSelection, computerSelection) {
  if (gameOver) {
    return;
  }

  playerSide.textContent = "The player chose: " + playerSelection;
  computerSide.textContent = "The computer chose: " + computerSelection;
  playerSide.appendChild(playerScoreBoard);
  computerSide.appendChild(computerScoreBoard);

  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Scissor") {
        announce.textContent = "Player wins! Rock beats Scissor";
        playerScore += 1;
      } else if (computerSelection === "Paper") {
        announce.textContent = "Computer wins! Rock beats Paper";
        computerScore += 1;
      } else {
        announce.textContent = "Its a draw!";
      }
      break;
    case "Paper":
      if (computerSelection === "Rock") {
        announce.textContent = "Player wins! Paper beats Rock";
        playerScore += 1;
      } else if (computerSelection === "Scissor") {
        announce.textContent = "Computer wins! Rock beats Paper";
        computerScore += 1;
      } else {
        announce.textContent = "Its a draw";
      }
      break;
    case "Scissor":
      if (computerSelection === "Paper") {
        announce.textContent = "Player wins! Scissor beats Paper";
        playerScore += 1;
      } else if (computerSelection === "Rock") {
        announce.textContent = "Computer wins! Rock beats Paper";
        computerScore += 1;
      } else {
        announce.textContent = "Its a draw";
      }
  }
  updateScoreBoard();
  checkGameOver();
}

function game() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target === btnRock) {
      playRound("Rock", getComputerChoice());
    } else if (target === btnPaper) {
      playRound("Paper", getComputerChoice());
    } else if (target === btnScissor) {
      playRound("Scissor", getComputerChoice());
    }
  });
}
game();
