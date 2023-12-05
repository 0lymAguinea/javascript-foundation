export default function showTomorrow() {
  createTopDisplay();
  createMiddleDisplay();
  createBottomDisplay();
}

function createTopDisplay() {
  let projectCount = 0;
  const mainContent = document.getElementById("mainContent");
  const display = document.createElement("div");
  display.id = "currentProjectContainer";
  const currentProjectLocation = document.createElement("h2");
  currentProjectLocation.textContent = "Tomorrow projects";
  const currentProjectCounts = document.createElement("h2");
  currentProjectCounts.textContent = projectCount;
  mainContent.append(display);
  display.append(currentProjectLocation);
  display.append(currentProjectCounts);
}
function createMiddleDisplay() {
  const mainContent = document.getElementById("mainContent");
  const middleDisplay = document.createElement("div");
  middleDisplay.id = "middleDisplay";

  mainContent.append(middleDisplay);
}
function createBottomDisplay() {
  const mainContent = document.getElementById("mainContent");
  const bottomDisplay = document.createElement("div");
  bottomDisplay.id = "bottomDisplay";

  mainContent.append(bottomDisplay);
}
