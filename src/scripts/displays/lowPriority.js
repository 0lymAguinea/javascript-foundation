import createTodoPage from "../todosAdditional/createTodoPage";
import { displayLowPriority } from "../lowPriorityTodo";
import { getLowPriorityCount } from "../features/projectCounter";
import displayLowPriorityTodoForm from "../lowPriorityTodo";
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
  currentProjectCounts.textContent = getLowPriorityCount();
  mainContent.append(display);
  display.append(currentProjectLocation);
  display.append(currentProjectCounts);
}
function createMiddleDisplay() {
  const mainContent = document.getElementById("mainContent");
  const middleDisplay = document.createElement("div");
  middleDisplay.id = "middleDisplay";

  const addTodoButton = document.createElement("button");
  addTodoButton.id = "addTodoButton";
  addTodoButton.textContent = "New Low Priority TODO";

  mainContent.append(middleDisplay);
  middleDisplay.append(addTodoButton);
  displayTodoForm();
}
function createBottomDisplay() {
  const mainContent = document.getElementById("mainContent");
  const bottomDisplay = document.createElement("div");
  bottomDisplay.id = "bottomDisplay";

  mainContent.append(bottomDisplay);
}
function displayTodoForm() {
  const addTodoButton = document.getElementById("addTodoButton");
  addTodoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoPage();
    displayLowPriorityTodoForm();
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
