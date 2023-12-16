import showDefaultContent from "./scripts/displays/default.js";
import showToday from "./scripts/displays/today.js";
import showCalendar from "./scripts/displays/calendar.js";
import showHighPriorities from "./scripts/displays/highPriority.js";
import showMediumPriorities from "./scripts/displays/mediumPriority.js";
import showLowPriorities from "./scripts/displays/lowPriority.js";
//Create the navigation for the todo lists located at left side.
function myProjects() {
  const projectFolders = document.getElementById("projectFolders");

  const projectTitle = document.createElement("h2");
  projectTitle.textContent = "My TODO List";

  const projectFolder = document.createElement("div");
  projectFolder.id = "projectFolder";

  const projects = document.createElement("button");
  projects.innerHTML = `<i class="fa-solid fa-list-check"></i> Projects`;
  projects.id = "projectsBtn";

  const today = document.createElement("button");
  today.innerHTML = `<i class="fa-solid fa-person-running"></i> Today`;
  today.id = "todayBtn";

  const calendar = document.createElement("button");
  calendar.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Calendar`;
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

  projectFolders.append(projectTitle);
  projectFolders.append(projectFolder);
  projectFolders.append(priorityFolder);

  projectFolder.append(projects);
  projectFolder.append(today);
  projectFolder.append(calendar);

  priorityFolder.append(highPriorityButton);
  priorityFolder.append(mediumPriorityButton);
  priorityFolder.append(lowPriorityButton);

  //Buttons for default todos,today todos, and calendar todos
  projectButtonSelector();
  //Buttons for the 3 priorities todos such as high priority todos.
  priorityButtonSelector();
}

//Create to avoid duplication by clearing the mainContent which is the middle display
function clearMainContent() {
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = "";
}
//Create to avoid duplication by clearing the todoPage which is the right display
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
//Handles click event for the 3 main buttons.
function projectButtonSelector() {
  const projectsBtn = document.getElementById("projectsBtn");
  const todayBtn = document.getElementById("todayBtn");
  const calendarBtn = document.getElementById("calendarBtn");

  //For the default todos
  projectsBtn.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showDefaultContent();
  });

  //For the today todos
  todayBtn.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showToday();
  });

  //For the calendar todos
  calendarBtn.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showCalendar();
  });
}

//Handle click events for priorities todos
function priorityButtonSelector() {
  const highPriorityButton = document.getElementById("highPriorityButton");
  const mediumPriorityButton = document.getElementById("mediumPriorityButton");
  const lowPriorityButton = document.getElementById("lowPriorityButton");

  //For high priority todos
  highPriorityButton.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showHighPriorities();
  });

  //For medium priority todos
  mediumPriorityButton.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showMediumPriorities();
  });

  //For low priority todos
  lowPriorityButton.addEventListener("click", () => {
    clearMainContent();
    clearTodoPage();
    showLowPriorities();
  });
}
//call the left side navigation bar
myProjects();

//call the default todos
showDefaultContent();
