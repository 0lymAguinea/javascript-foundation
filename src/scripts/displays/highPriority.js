import { displayHighPriority } from "../highPriortyTodo";
import { getHighPriorityCount } from "../features/projectCounter";
import displayHighPriorityTodoForm from "../highPriortyTodo";
import createTodoPage from "../todosAdditional/createTodoPage";
export default function showHighPriorities() {
  createTopDisplay();
  createMiddleDisplay();
  createBottomDisplay();
  displayHighPriority();
}

function createTopDisplay() {
  const mainContent = document.getElementById("mainContent");
  const display = document.createElement("div");
  display.id = "currentProjectContainer";
  const currentProjectLocation = document.createElement("h2");
  currentProjectLocation.textContent = "High priorities";
  const currentProjectCounts = document.createElement("h2");
  currentProjectCounts.id = "taskCount";
  currentProjectCounts.textContent = getHighPriorityCount();
  mainContent.append(display);
  display.append(currentProjectLocation);
  display.append(currentProjectCounts);
}
function createMiddleDisplay() {
  const mainContent = document.getElementById("mainContent");
  const middleDisplay = document.createElement("div");
  middleDisplay.id = "middleDisplay";

  const addHighPriorityButton = document.createElement("button");
  addHighPriorityButton.id = "addHighPriorityButton";
  addHighPriorityButton.textContent = "New High Priority TODO";

  mainContent.append(middleDisplay);
  middleDisplay.append(addHighPriorityButton);
  displayTodoForm();
}
function createBottomDisplay() {
  const mainContent = document.getElementById("mainContent");
  const bottomDisplay = document.createElement("div");
  bottomDisplay.id = "bottomDisplay";

  mainContent.append(bottomDisplay);
}
function displayTodoForm() {
  const addHighPriorityButton = document.getElementById(
    "addHighPriorityButton"
  );
  addHighPriorityButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoPage();
    displayHighPriorityTodoForm();
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
