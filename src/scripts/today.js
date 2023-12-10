import { getTodayDate } from "./todayTodo";
import { todayDateFilter } from "./projectCounter";
import createTodoPage from "./createTodoPage";
import displayTodayTodoForm from "./todayTodo";
export default function showToday() {
  createTopDisplay();
  createMiddleDisplay();
  createBottomDisplay();
  getTodayDate();
}

function createTopDisplay() {
  const mainContent = document.getElementById("mainContent");
  const display = document.createElement("div");
  display.id = "currentProjectContainer";
  const currentProjectLocation = document.createElement("h2");
  currentProjectLocation.textContent = "Today tasks";
  const currentProjectCounts = document.createElement("h2");
  currentProjectCounts.id = "taskCount";
  currentProjectCounts.textContent = todayDateFilter();
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
  addTodayButton.textContent = "New Today TODO";

  mainContent.append(middleDisplay);
  middleDisplay.append(addTodayButton);
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
  const addTodayButton = document.getElementById("addTodayButton");
  addTodayButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoPage();
    displayTodayTodoForm();
  });
}
