import displayGame from "./gameLogic";
import { player1Board, player2Board } from "./gameBoard";
import { player1Ships, player2Ships } from "./ship";

function playerFormCreation(formPlayer, playerNum) {
  const form = document.createElement("form");
  form.id = `player${playerNum}Form`;

  const formContainer = document.createElement("div");
  formContainer.id = "formContainer";

  const shipName = document.createElement("p");
  const shipLoc = document.createElement("p");
  const shipOrientation = document.createElement("p");
  shipName.textContent = `Ship's name`;
  shipLoc.textContent = `Ship's coordinates`;
  shipOrientation.textContent = `Ship's orientation`;

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

  const readyButton = document.createElement("button");

  playerCarrierInput.required = true;
  playerBattleShipInput.required = true;
  playerCruiserInput.required = true;
  playerSubmarineInput.required = true;
  playerDestroyerInput.required = true;

  playerCarrierInput.pattern = "[0-9],[0-9]";
  playerBattleShipInput.pattern = "[0-9],[0-9]";
  playerCruiserInput.pattern = "[0-9],[0-9]";
  playerSubmarineInput.pattern = "[0-9],[0-9]";
  playerDestroyerInput.pattern = "[0-9],[0-9]";

  playerCarrierLabel.textContent = "Carrier";
  playerBattleShipLabel.textContent = "Battleship";
  playerCruiserLabel.textContent = "Cruiser";
  playerSubmarineLabel.textContent = "Submarine";
  playerDestroyerLabel.textContent = "Destroyer";
  readyButton.textContent = "Ready";

  playerCarrierLabel.for = `player${playerNum}Carrier`;
  playerCarrierLabel.id = `player${playerNum}CarrierLabel`;
  playerBattleShipLabel.for = `player${playerNum}Battleship`;
  playerBattleShipLabel.id = `player${playerNum}BattleshipLabel`;
  playerCruiserLabel.for = `player${playerNum}Cruiser`;
  playerCruiserLabel.id = `player${playerNum}CruiserLabel`;
  playerSubmarineLabel.for = `player${playerNum}Submarine`;
  playerSubmarineLabel.id = `player${playerNum}SubmarineLabel`;
  playerDestroyerLabel.for = `player${playerNum}Destroyer`;
  playerDestroyerLabel.id = `player${playerNum}DestroyerLabel`;

  playerCarrierInput.id = `player${playerNum}Carrier`;
  playerCarrierInput.name = `player${playerNum}Carrier`;
  playerCarrierInput.placeholder = `row,column`;
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
  form.append(formContainer);
  formContainer.append(shipName, shipLoc, shipOrientation);
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

  inputSelectOption(playerNum);

  readyButton.addEventListener("click", (e) => {
    e.preventDefault();
    readyButtonAction(readyButton);
    if (checkIfBothPlayerIsReady(playerNum)) {
      submitForm();
      if (checkIfAllShipsArePlaced()) {
        clearBoard();
        callGameBoard();
      }
    }
  });
}

function inputSelectOption(playerNum) {
  const HORIZONTAL = "Horizontal";
  const VERTICAL = "Vertical";
  const playerCarrierLabel = document.getElementById(
    `player${playerNum}CarrierLabel`
  );
  const playerBattleshipLabel = document.getElementById(
    `player${playerNum}BattleshipLabel`
  );

  const playerCruiserLabel = document.getElementById(
    `player${playerNum}CruiserLabel`
  );

  const playerSubmarineLabel = document.getElementById(
    `player${playerNum}SubmarineLabel`
  );

  const playerDestroyerLabel = document.getElementById(
    `player${playerNum}DestroyerLabel`
  );

  const playerCarrierSelect = document.createElement("select");
  playerCarrierSelect.id = `player${playerNum}CarrierSelect`;
  const playerBattleShipSelect = document.createElement("select");
  playerBattleShipSelect.id = `player${playerNum}BattleshipSelect`;
  const playerCruiserSelect = document.createElement("select");
  playerCruiserSelect.id = `player${playerNum}CruiserSelect`;
  const playerSubmarineSelect = document.createElement("select");
  playerSubmarineSelect.id = `player${playerNum}SubmarineSelect`;
  const playerDestroyerSelect = document.createElement("select");
  playerDestroyerSelect.id = `player${playerNum}DestroyerSelect`;
  const playerCarrierOption1 = document.createElement("option");
  const playerCarrierOption2 = document.createElement("option");

  const playerBattleshipOption1 = document.createElement("option");
  const playerBattleshipOption2 = document.createElement("option");

  const playerCruiserOption1 = document.createElement("option");
  const playerCruiserOption2 = document.createElement("option");

  const playerSubmarineOption1 = document.createElement("option");
  const playerSubmarineOption2 = document.createElement("option");

  const playerDestroyerOption1 = document.createElement("option");
  const playerDestroyerOption2 = document.createElement("option");

  playerCarrierOption1.text = HORIZONTAL;
  playerCarrierOption2.text = VERTICAL;
  playerBattleshipOption1.text = HORIZONTAL;
  playerBattleshipOption2.text = VERTICAL;
  playerCruiserOption1.text = HORIZONTAL;
  playerCruiserOption2.text = VERTICAL;
  playerSubmarineOption1.text = HORIZONTAL;
  playerSubmarineOption2.text = VERTICAL;
  playerDestroyerOption1.text = HORIZONTAL;
  playerDestroyerOption2.text = VERTICAL;

  playerCarrierOption1.value = "horizontal";
  playerCarrierOption2.value = "vertical";
  playerBattleshipOption1.value = "horizontal";
  playerBattleshipOption2.value = "vertical";
  playerCruiserOption1.value = "horizontal";
  playerCruiserOption2.value = "vertical";
  playerSubmarineOption1.value = "horizontal";
  playerSubmarineOption2.value = "vertical";
  playerDestroyerOption1.value = "horizontal";
  playerDestroyerOption2.value = "vertical";

  playerCarrierLabel.append(playerCarrierSelect);
  playerBattleshipLabel.append(playerBattleShipSelect);
  playerCruiserLabel.append(playerCruiserSelect);
  playerSubmarineLabel.append(playerSubmarineSelect);
  playerDestroyerLabel.append(playerDestroyerSelect);

  playerCarrierSelect.append(playerCarrierOption1);
  playerCarrierSelect.append(playerCarrierOption2);
  playerBattleShipSelect.append(playerBattleshipOption1);
  playerBattleShipSelect.append(playerBattleshipOption2);
  playerCruiserSelect.append(playerCruiserOption1);
  playerCruiserSelect.append(playerCruiserOption2);
  playerSubmarineSelect.append(playerSubmarineOption1);
  playerSubmarineSelect.append(playerSubmarineOption2);
  playerDestroyerSelect.append(playerDestroyerOption1);
  playerDestroyerSelect.append(playerDestroyerOption1);
}

function readyButtonAction(button) {
  button.setAttribute("isReady", true);
}

function clearBoard() {
  const player1BoardContainer = document.getElementById("player1Board");
  const player2BoardContainer = document.getElementById("player2Board");

  player1BoardContainer.innerHTML = "";
  player2BoardContainer.innerHTML = "";
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

function checkIfAllShipsArePlaced() {
  const board1 = player1Board.board;
  const board2 = player2Board.board;

  const shipNames = [
    "carrier",
    "battleship",
    "cruiser",
    "submarine",
    "destroyer",
  ];

  const board1ContainsAllPlayer1Ship = shipNames.every((shipName) =>
    board1.some((row) => row.includes(shipName))
  );

  const board2ContainsAllPlayer1Ship = shipNames.every((shipName) =>
    board2.some((row) => row.includes(shipName))
  );
  if (
    board1ContainsAllPlayer1Ship === true &&
    board2ContainsAllPlayer1Ship === true
  ) {
    return true;
  }
  return false;
}

function submitForm() {
  const shipNames = [
    "Carrier",
    "Battleship",
    "Cruiser",
    "Submarine",
    "Destroyer",
  ];

  const player1ShipValues = {};
  const player2ShipValues = {};

  for (const shipName of shipNames) {
    const inputPlayer1ID = `player1${shipName}`;
    const inputPlayer2ID = `player2${shipName}`;

    const inputPlayer1Value = document.getElementById(inputPlayer1ID).value;
    const inputPlayer2Value = document.getElementById(inputPlayer2ID).value;

    player1ShipValues[shipName] = inputPlayer1Value.split(",");

    player2ShipValues[shipName] = inputPlayer2Value.split(",");

    const loweredStrShip = shipName.toLowerCase();

    const row1 = player1ShipValues[shipName][0];
    const col1 = player1ShipValues[shipName][1];
    const shipsPlayer1 = player1Ships.shipCategory[loweredStrShip];

    const row2 = player2ShipValues[shipName][0];
    const col2 = player2ShipValues[shipName][1];
    const shipsPlayer2 = player2Ships.shipCategory[loweredStrShip];

    const player1Orientation = document.getElementById(
      `player1${shipName}Select`
    ).value;
    const player2Orientation = document.getElementById(
      `player2${shipName}Select`
    ).value;

    placePlayer1ShipsToBoard(row1, col1, shipsPlayer1, player1Orientation);
    placePlayer2ShipsToBoard(row2, col2, shipsPlayer2, player2Orientation);
  }
}
function placePlayer1ShipsToBoard(row, col, ship, orientation) {
  player1Board.placeShip(Number(row), Number(col), ship, orientation);
}
function placePlayer2ShipsToBoard(row, col, ship, orientation) {
  player2Board.placeShip(Number(row), Number(col), ship, orientation);
}
