import { displayMediumPriority } from "../mediumPriorityTodo";
import { getMediumPriorityCount } from "../features/projectCounter";
import displayMediumPriorityTodoForm from "../mediumPriorityTodo";
import createTodoPage from "../todosAdditional/createTodoPage";
export default function showMediumPriorities() {
  createTopDisplay();
  createMiddleDisplay();
  createBottomDisplay();
  displayMediumPriority();
}

function createTopDisplay() {
  const mainContent = document.getElementById("mainContent");
  const display = document.createElement("div");
  display.id = "currentProjectContainer";
  const currentProjectLocation = document.createElement("h2");
  currentProjectLocation.textContent = "Medium priorities";
  const currentProjectCounts = document.createElement("h2");
  currentProjectCounts.id = "taskCount";
  currentProjectCounts.textContent = getMediumPriorityCount();
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
  addTodoButton.textContent = "New Medium Priority TODO";

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
    displayMediumPriorityTodoForm();
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
