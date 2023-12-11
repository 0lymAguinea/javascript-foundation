import createTodoPage from "../todosAdditional/createTodoPage.js";
import displayTodo, { displayMiddleContentTodos } from "../todo.js";
import { getAllTaskCount } from "../features/projectCounter.js";

export default function showDefaultContent() {
  showDefaultDisplay();
}

function showDefaultDisplay() {
  createTopDisplay();
  createMiddleDisplay();
  createBottomDisplay();
  displayMiddleContentTodos();
}
function createTopDisplay() {
  const mainContent = document.getElementById("mainContent");
  const display = document.createElement("div");
  display.id = "currentProjectContainer";
  const currentProjectLocation = document.createElement("h2");
  currentProjectLocation.textContent = "All Tasks";
  const currentProjectCounts = document.createElement("h2");
  currentProjectCounts.id = "taskCount";
  currentProjectCounts.textContent = getAllTaskCount();
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
  addTodoButton.textContent = "New TODO";

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
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}

function displayTodoForm() {
  const addTodoButton = document.getElementById("addTodoButton");
  addTodoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoPage();
    displayTodo();
  });
}
