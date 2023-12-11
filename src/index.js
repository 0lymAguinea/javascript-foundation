import showDefaultContent from "./scripts/displays/default.js";
import showToday from "./scripts/displays/today.js";
import showCalendar from "./scripts/displays/calendar.js";
import { displayMiddleContentTodos } from "./scripts/todo.js";
import showHighPriorities from "./scripts/displays/highPriority.js";
import showMediumPriorities from "./scripts/displays/mediumPriority.js";
import showLowPriorities from "./scripts/displays/lowPriority.js";
function myProjects() {
  const projectFolders = document.getElementById("projectFolders");

  const projectFolder = document.createElement("div");
  projectFolder.id = "projectFolder";
  projectFolders.textContent = "My TODO List";

  const projects = document.createElement("button");
  projects.textContent = "Projects";
  projects.id = "projectsBtn";

  const today = document.createElement("button");
  today.textContent = "Today";
  today.id = "todayBtn";

  const calendar = document.createElement("button");
  calendar.textContent = "Calendar";
  calendar.id = "calendarBtn";

  const priorityFolder = document.createElement("div");
  priorityFolder.id = "priorityFolder";

  const highPriorityButton = document.createElement("button");
  highPriorityButton.textContent = "High priority";
  highPriorityButton.id = "highPriorityButton";

  const mediumPriorityButton = document.createElement("button");
  mediumPriorityButton.textContent = "Medium priority";
  mediumPriorityButton.id = "mediumPriorityButton";

  const lowPriorityButton = document.createElement("button");
  lowPriorityButton.textContent = "Low priority";
  lowPriorityButton.id = "lowPriorityButton";

  projectFolders.append(projectFolder);
  projectFolder.append(projects);
  projectFolder.append(today);
  projectFolder.append(calendar);

  projectFolders.append(priorityFolder);
  priorityFolder.append(highPriorityButton);
  priorityFolder.append(mediumPriorityButton);
  priorityFolder.append(lowPriorityButton);
  projectButtonSelector();
  priorityButtonSelector();
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
  const calendarBtn = document.getElementById("calendarBtn");

  projectsBtn.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showDefaultContent();
  });

  todayBtn.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showToday();
  });

  calendarBtn.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showCalendar();
  });
}

function priorityButtonSelector() {
  const highPriorityButton = document.getElementById("highPriorityButton");
  const mediumPriorityButton = document.getElementById("mediumPriorityButton");
  const lowPriorityButton = document.getElementById("lowPriorityButton");

  highPriorityButton.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showHighPriorities();
  });

  mediumPriorityButton.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showMediumPriorities();
  });

  lowPriorityButton.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showLowPriorities();
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
