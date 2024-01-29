function createForm() {
  const form = document.createElement("form");

  const player1Label = document.createElement("label");
  const player2Label = document.createElement("label");

  const player1Input = document.createElement("input");
  const player2Input = document.createElement("input");

  player1Input.id = "player1Name";
  player1Input.placeholder = "Player 1 name";

  player2Input.id = "player2Name";
  player2Input.placeholder = "Player 2 name";

  form.append(player1Label);
  form.append(player2Label);

  player1Label.append(player1Input);
  player2Label.append(player2Input);
}
