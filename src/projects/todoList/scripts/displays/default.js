import createTodoPage from "../todosAdditional/createTodoPage.js";
import displayTodo, { displayMiddleContentTodos } from "../todo.js";
import { getAllTaskCount } from "../features/projectCounter.js";

//Exported to index.js to be called as the default display
export default function showDefaultContent() {
  showDefaultDisplay();
}

//Handles calling the top,middle and bottom display in the middle located at middleDisplay.
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
//Handles the creation of the form for adding new todos
function displayTodoForm() {
  const addTodoButton = document.getElementById("addTodoButton");
  addTodoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoPage(); //Call the form for creating new todos
    displayTodo(); //Get the form for the data to be entered
  });
}
