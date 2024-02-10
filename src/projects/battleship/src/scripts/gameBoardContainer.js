function createMainContainer() {
  const div = document.createElement("div");
  div.classList = "container";

  document.body.append(div);
}
function player1BoardContainer() {
  const div = document.querySelector(".container");
  const container = document.createElement("div");
  container.id = "player1BoardForm";

  div.append(container);
}

function player2BoardContainer() {
  const div = document.querySelector(".container");
  const container = document.createElement("div");
  container.id = "player2BoardForm";

  div.append(container);
}
export default function displayContainers() {
  createMainContainer();
  player1BoardContainer();
  player2BoardContainer();
}
