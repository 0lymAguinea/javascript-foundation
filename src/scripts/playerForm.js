import displayGame from "./gameLogic";

function playerFormCreation(formPlayer, playerNum) {
  const form = document.createElement("form");
  form.id = `player${playerNum}Form`;

  const playerCarrierLabel = document.createElement("label");
  const playerBattleShipLabel = document.createElement("label");
  const playerCruiserLabel = document.createElement("label");
  const playerSubmarineLabel = document.createElement("label");
  const playerDestroyerLabel = document.createElement("label");

  const playerCarrierInput = document.createElement("input");
  const playerBattleShipInput = document.createElement("input");
  const playerCruiserInput = document.createElement("input");
  const playerSubmarineInput = document.createElement("input");
  const playerDestroyerInput = document.createElement("input");

  playerCarrierInput.required = true;
  playerBattleShipInput.required = true;
  playerCruiserInput.required = true;
  playerSubmarineInput.required = true;
  playerDestroyerInput.required = true;

  const readyButton = document.createElement("button");

  playerCarrierLabel.textContent = "Carrier";
  playerBattleShipLabel.textContent = "Battleship";
  playerCruiserLabel.textContent = "Cruiser";
  playerSubmarineLabel.textContent = "Submarine";
  playerDestroyerLabel.textContent = "Destroyer";
  readyButton.textContent = "Ready";

  playerCarrierLabel.for = `player${playerNum}Carrier`;
  playerBattleShipLabel.for = `player${playerNum}Battleship`;
  playerCruiserLabel.for = `player${playerNum}Cruiser`;
  playerSubmarineLabel.for = `player${playerNum}Submarine`;
  playerDestroyerLabel.for = `player${playerNum}Destroyer`;

  playerCarrierInput.id = `player${playerNum}Carrier`;
  playerCarrierInput.name = `player${playerNum}Carrier`;
  playerBattleShipInput.id = `player${playerNum}Battleship`;
  playerBattleShipInput.name = `player${playerNum}Battleship`;
  playerCruiserInput.id = `player${playerNum}Cruiser`;
  playerCruiserInput.name = `player${playerNum}Cruiser`;
  playerSubmarineInput.id = `player${playerNum}Submarine`;
  playerSubmarineInput.name = `player${playerNum}Submarine`;
  playerDestroyerInput.id = `player${playerNum}Destroyer`;
  playerBattleShipInput.name = `player${playerNum}Destroyer`;

  readyButton.id = `player${playerNum}ReadyButton`;

  formPlayer.append(form);
  form.append(playerCarrierLabel);
  form.append(playerBattleShipLabel);
  form.append(playerCruiserLabel);
  form.append(playerSubmarineLabel);
  form.append(playerDestroyerLabel);
  form.append(readyButton);

  playerCarrierLabel.append(playerCarrierInput);
  playerBattleShipLabel.append(playerBattleShipInput);
  playerCruiserLabel.append(playerCruiserInput);
  playerSubmarineLabel.append(playerSubmarineInput);
  playerDestroyerLabel.append(playerDestroyerInput);

  readyButton.addEventListener("click", (e) => {
    e.preventDefault();
    readyButtonAction(readyButton);
    if (checkIfBothPlayerIsReady(playerNum)) {
      submitForm();
      clearBoard();
      callGameBoard();
    }
  });
}

function readyButtonAction(button) {
  button.setAttribute("isReady", true);
}

function clearBoard() {
  const player1Board = document.getElementById("player1Board");
  const player2Board = document.getElementById("player2Board");

  player1Board.innerHTML = "";
  player2Board.innerHTML = "";
}

function callGameBoard() {
  displayGame();
}

function checkIfBothPlayerIsReady(playerNum) {
  const player1ReadyButton = document.getElementById("player1ReadyButton");
  const player2ReadyButton = document.getElementById("player2ReadyButton");

  const isPlayer1Ready = player1ReadyButton.getAttribute("isReady") === "true";
  const isPlayer2Ready = player2ReadyButton.getAttribute("isReady") === "true";

  if (playerNum === 1 && isPlayer1Ready && isPlayer2Ready) {
    return true;
  }
  if (playerNum === 2 && isPlayer1Ready && isPlayer2Ready) {
    return true;
  }

  return false;
}

export default function playerForm() {
  const player1Board = document.getElementById("player1Board");
  const player2Board = document.getElementById("player2Board");

  playerFormCreation(player1Board, 1);
  playerFormCreation(player2Board, 2);
}
