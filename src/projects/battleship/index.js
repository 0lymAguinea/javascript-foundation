import playerForm from "./scripts/playerForm";
import displayContainers from "./scripts/gameBoardContainer";

function clearStartingContainer() {
  const div = document.querySelector(".startingContainer");
  document.body.removeChild(div);
}
function playerVsPlayer() {
  const button = document.getElementById("playerVsPlayer");
  button.addEventListener("click", () => {
    clearStartingContainer();
    displayContainers();
    playerForm();
  });
}
playerVsPlayer();
