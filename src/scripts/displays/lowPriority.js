import { displayLowPriority } from "../lowPriorityTodo";
export default function showLowPriorities() {
  createTopDisplay();
  createMiddleDisplay();
  createBottomDisplay();
  displayLowPriority();
}

function createTopDisplay() {
  const mainContent = document.getElementById("mainContent");
  const display = document.createElement("div");
  display.id = "currentProjectContainer";
  const currentProjectLocation = document.createElement("h2");
  currentProjectLocation.textContent = "Low priorities";
  const currentProjectCounts = document.createElement("h2");
  currentProjectCounts.id = "taskCount";
  currentProjectCounts.textContent = 0;
  mainContent.append(display);
  display.append(currentProjectLocation);
  display.append(currentProjectCounts);
}
function createMiddleDisplay() {
  const mainContent = document.getElementById("mainContent");
  const middleDisplay = document.createElement("div");
  middleDisplay.id = "middleDisplay";

  const addTodayButton = document.createElement("button");
  addTodayButton.id = "addTodayButton";
  addTodayButton.textContent = "New Low Priority TODO";

  mainContent.append(middleDisplay);
  middleDisplay.append(addTodayButton);
  //displayTodoForm();
}
function createBottomDisplay() {
  const mainContent = document.getElementById("mainContent");
  const bottomDisplay = document.createElement("div");
  bottomDisplay.id = "bottomDisplay";

  mainContent.append(bottomDisplay);
}
