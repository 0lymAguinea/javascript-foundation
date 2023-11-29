import showDefaultContent from "./scripts/default.js";
import showToday from "./scripts/today.js";
import showTomorrow from "./scripts/tomorrow.js";
import createTodoPage from "./scripts/createTodoPage.js";
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

function projectButtonSelector() {
  const projectsBtn = document.getElementById("projectsBtn");
  const todayBtn = document.getElementById("todayBtn");
  const tomorrowBtn = document.getElementById("tomorrowBtn");

  projectsBtn.addEventListener("click", () => {
    showDefaultContent();
  });

  todayBtn.addEventListener("click", () => {
    showToday();
  });

  tomorrowBtn.addEventListener("click", () => {
    showTomorrow();
  });
}
function pageContents() {
  let middileContent = showDefaultContent();
  let rightContent = createTodoPage();

  return { middileContent, rightContent };
}
myProjects();
pageContents();
