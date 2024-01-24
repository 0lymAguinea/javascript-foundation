function playerFormCreation(formPlayer, playerNum) {
  const form = document.createElement("form");

  const playerCarrierLabel = document.createElement("label");
  const playerBattleShipLabel = document.createElement("label");
  const playerCruiserLabel = document.createElement("label");
  const playerSubmarineLabel = document.createElement("label");
  const playerDestroyerLabel = document.createElement("label");

  const playerBattleShipInput = document.createElement("input");
  const playerCarrierInput = document.createElement("input");
  const playerCruiserInput = document.createElement("input");
  const playerSubMarineInput = document.createElement("input");
  const playerDestroyerInput = document.createElement("input");

  const submitButton = document.createElement("button");

  playerCarrierLabel.textContent = "Carrier";
  playerBattleShipLabel.textContent = "Battleship";
  playerCruiserLabel.textContent = "Cruiser";
  playerSubmarineLabel.textContent = "Submarine";
  playerDestroyerLabel.textContent = "Destroyer";
  submitButton.textContent = "Submit";

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
  playerSubMarineInput.id = `player${playerNum}Submarine`;
  playerSubMarineInput.name = `player${playerNum}Submarine`;
  playerDestroyerInput.id = `player${playerNum}Destroyer`;
  playerBattleShipInput.name = `player${playerNum}Destroyer`;

  submitButton.id = `player${playerNum}Button`;

  formPlayer.append(form);
  form.append(playerCarrierLabel);
  form.append(playerBattleShipLabel);
  form.append(playerCruiserLabel);
  form.append(playerSubmarineLabel);
  form.append(playerDestroyerLabel);
  form.append(submitButton);
  playerCarrierLabel.append(playerCarrierInput);
  playerBattleShipLabel.append(playerBattleShipInput);
  playerCruiserLabel.append(playerCruiserInput);
  playerSubmarineLabel.append(playerSubMarineInput);
  playerDestroyerLabel.append(playerDestroyerInput);

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
  });
}

export default function playerForm() {
  const player1Board = document.getElementById("player1Board");
  const player2Board = document.getElementById("player2Board");

  playerFormCreation(player1Board, 1);
  playerFormCreation(player2Board, 2);
}
