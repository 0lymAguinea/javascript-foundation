import { myTodos } from "./todo";
import showDefaultContent from "./default";
export default function showToday() {
  createTopDisplay();
  createMiddleDisplay();
  createBottomDisplay();
  displayTodayTodo();
}

function createTopDisplay() {
  let projectCount = 0;
  const mainContent = document.getElementById("mainContent");
  const display = document.createElement("div");
  display.id = "currentProjectContainer";
  const currentProjectLocation = document.createElement("h2");
  currentProjectLocation.textContent = "Today projects";
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

function displayTodayTodo() {
  const bottomDisplay = document.getElementById("bottomDisplay");
  myTodos.forEach((todo, index) => {
    const todoButton = document.createElement("button");
    let textTitle = document.createElement("span");
    let textDate = document.createElement("span");

    textTitle = todo.title;
    textDate = todo.dueDate;
    todoButton.dataset.todoid = index;
    todoButton.className = "todoProjectButton";
    bottomDisplay.append(todoButton);
    todoButton.append(`${textTitle} : ${textDate} `);
  });
}
