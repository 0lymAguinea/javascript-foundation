import displayGame from "./gameLogic";
import { player1Board, player2Board } from "./gameBoard";
import { player1Ships, player2Ships } from "./ship";
import validateForm from "./formValidation";

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
  const playerBattleshipLabel = document.createElement("label");
  const playerCruiserLabel = document.createElement("label");
  const playerSubmarineLabel = document.createElement("label");
  const playerDestroyerLabel = document.createElement("label");

  const playerCarrierInput = document.createElement("input");
  const playerBattleshipInput = document.createElement("input");
  const playerCruiserInput = document.createElement("input");
  const playerSubmarineInput = document.createElement("input");
  const playerDestroyerInput = document.createElement("input");

  const readyButton = document.createElement("button");

  const nameOfShips = [
    "Carrier",
    "Battleship",
    "Cruiser",
    "Submarine",
    "Destroyer",
  ];
  const labelArray = [
    playerCarrierLabel,
    playerBattleshipLabel,
    playerCruiserLabel,
    playerSubmarineLabel,
    playerDestroyerLabel,
  ];
  const inputArray = [
    playerCarrierInput,
    playerBattleshipInput,
    playerCruiserInput,
    playerSubmarineInput,
    playerDestroyerInput,
  ];

  for (let i = 0; i < nameOfShips.length; i += 1) {
    const label = labelArray[i];
    const input = inputArray[i];

    label.textContent = nameOfShips[i];
    label.for = `player${playerNum}${nameOfShips[i]}`;
    label.id = `player${playerNum}${nameOfShips[i]}Label`;

    input.id = `player${playerNum}${nameOfShips[i]}`;
    input.name = `player${playerNum}${nameOfShips[i]}`;

    input.autocomplete = "off";

    form.append(label);
    label.append(input);
  }

  readyButton.textContent = "Click to ready";

  readyButton.id = `player${playerNum}ReadyButton`;
  readyButton.setAttribute("isReady", "false");
  formPlayer.append(formContainer);
  formPlayer.append(form);

  formContainer.append(shipName, shipLoc, shipOrientation);
  form.append(readyButton);

  inputSelectOption(playerNum);

  validateForm();

  readyButton.addEventListener("click", (e) => {
    e.preventDefault();
    readyButtonAction(readyButton);
    checkIfBothPlayerIsReady(playerNum);
  });
}

function inputSelectOption(playerNum) {
  const labelIds = [
    `player${playerNum}CarrierLabel`,
    `player${playerNum}BattleshipLabel`,
    `player${playerNum}CruiserLabel`,
    `player${playerNum}SubmarineLabel`,
    `player${playerNum}DestroyerLabel`,
  ];

  const shipNames = [
    "Carrier",
    "Battleship",
    "Cruiser",
    "Submarine",
    "Destroyer",
  ];
  const orientationOptions = ["Horizontal", "Vertical"];

  for (let i = 0; i < labelIds.length; i += 1) {
    const label = document.getElementById(labelIds[i]);
    const select = document.createElement("select");
    select.id = `player${playerNum}${shipNames[i]}Select`;

    for (const optionText of orientationOptions) {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText.toLowerCase();
      select.append(option);
    }

    label.append(select);
  }
}

function readyButtonAction(button) {
  if (button.getAttribute("isReady") === "false") {
    button.setAttribute("isReady", "true");
    button.textContent = "Ready";
  } else if (button.getAttribute("isReady") === "true") {
    button.setAttribute("isReady", "false");
    button.textContent = "Click to ready";
  }
}

export function notReadyButtonAction() {
  const player1Button = document.getElementById(`player1ReadyButton`);
  const player2Button = document.getElementById("player2ReadyButton");

  player1Button.setAttribute("isReady", false);
  player2Button.setAttribute("isReady", false);

  player1Button.textContent = "Not ready";
  player2Button.textContent = "Not ready";
}

function removeForms() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    if (form.parentNode) {
      form.parentNode.removeChild(form);
    }
  });
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
    checkIfAllInputsAreValid();
  }
  if (playerNum === 2 && isPlayer1Ready && isPlayer2Ready) {
    checkIfAllInputsAreValid();
  }

  return false;
}

function checkIfAllInputsAreValid() {
  const inputs = document.querySelectorAll("input");
  const totalInputs = 10;
  let countTrue = 0;
  inputs.forEach((input) => {
    const isReadyValue = input.getAttribute("isReady");
    if (isReadyValue === "true") {
      countTrue += 1;
      if (countTrue === totalInputs) {
        player1Board.resetBoard();
        player2Board.resetBoard();
        submitForm();

        if (checkIfAllShipsArePlaced()) {
          removeForms();
          removePlayerBoardForm();
          callGameBoard();
        }
      }
    }
    return true;
  });

  return false;
}

function removePlayerBoardForm() {
  const container = document.querySelector(".container");
  const form1 = document.getElementById("player1BoardForm");
  const form2 = document.getElementById("player2BoardForm");

  container.removeChild(form1);
  container.removeChild(form2);
}

function addValidationAttributes() {
  const allInputs = document.querySelectorAll("input");

  allInputs.forEach((input) => {
    input.required = true;
    input.pattern = "[0-9],[0-9]";
    input.maxLength = 3;
    input.placeholder = "row,column";
  });
}

export default function playerForm() {
  const player1 = document.getElementById("player1BoardForm");
  const player2 = document.getElementById("player2BoardForm");

  playerFormCreation(player1, 1);

  playerFormCreation(player2, 2);
  addValidationAttributes();
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
  player1Board.placeShip(
    Number(row),
    Number(col),
    ship,
    orientation,
    "player1"
  );
}
function placePlayer2ShipsToBoard(row, col, ship, orientation) {
  player2Board.placeShip(
    Number(row),
    Number(col),
    ship,
    orientation,
    "player2"
  );
}
function resetWrongInputs(input) {
  input.value = "";
}

export function resetWrongShipInput(wrongShip, playerName) {
  const capitalizeShip =
    wrongShip.name[0].toUpperCase() + wrongShip.name.slice(1);
  const input = document.querySelector(`#${playerName}${capitalizeShip}`);

  resetWrongInputs(input);
}
