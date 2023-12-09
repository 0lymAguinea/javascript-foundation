import showDefaultContent from "./scripts/default.js";
import showToday from "./scripts/today.js";
import showCalendar from "./scripts/calendar.js";
import { displayMiddleContentTodos } from "./scripts/todo.js";
function myProjects() {
  const projectFolders = document.getElementById("projectFolders");
  projectFolders.textContent = "My TODO List";

  const projects = document.createElement("button");
  projects.textContent = "Projects";
  projects.id = "projectsBtn";

  const today = document.createElement("button");
  today.textContent = "Today";
  today.id = "todayBtn";

  const tomorrow = document.createElement("button");
  tomorrow.textContent = "Tomorrow";
  tomorrow.id = "tomorrowBtn";

  projectFolders.append(projects);
  projectFolders.append(today);
  projectFolders.append(tomorrow);
  projectButtonSelector();
}

function clearMainContent() {
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = "";
}

function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}

function projectButtonSelector() {
  const projectsBtn = document.getElementById("projectsBtn");
  const todayBtn = document.getElementById("todayBtn");
  const tomorrowBtn = document.getElementById("tomorrowBtn");

  projectsBtn.addEventListener("click", () => {
    clearMainContent();
    showDefaultContent();
    displayMiddleContentTodos();
  });

  todayBtn.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showToday();
  });

  tomorrowBtn.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showCalendar();
  });
}
function pageContents() {
  let middileContent = showDefaultContent();
  //let rightContent = createTodoPage();

  return { middileContent };
}

myProjects();
pageContents();
//displayTodo();
