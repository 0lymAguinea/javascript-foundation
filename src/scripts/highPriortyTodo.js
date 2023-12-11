import { myTodos } from "./todo";
import { getTodoPriority } from "./priority";
import { getTodosIsCheck } from "./isComplete";
import { createTodoInformation } from "./todoInformation";
const HIGH_PRIORITY = "High priority";
const HIGH_PRIORITY_TODO = "highPriorityTodo";
export function displayHighPriority() {
  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";
  myTodos.forEach((todo, index) => {
    if (todo.priority === HIGH_PRIORITY) {
      displayHighPriorities(todo, index);
    }
  });
}

function displayHighPriorities(todo, index) {
  const todoButton = document.createElement("button");
  let textTitle = document.createElement("span");
  let textDate = document.createElement("span");
  textTitle = todo.title;
  textDate = todo.dueDate;
  todoButton.dataset.todoid = index;
  todoButton.className = "todoProjectButton";
  bottomDisplay.append(todoButton);
  todoButton.append(`${textTitle} : ${textDate} `);
  todoButtonItems(todoButton, todo, index);
}
function todoButtonItems(todoButton, todo, index) {
  todoButton.addEventListener("click", () => {
    clearTodoPage();
    //createTodoInformation(todo, index, HIGH_PRIORITY_TODO);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
