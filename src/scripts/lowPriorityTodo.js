import { myTodos } from "./todo";
import { getTodoPriority } from "./features/priority";
import { getTodosIsCheck } from "./features/isComplete";
import { createTodoInformation } from "./todosAdditional/todoInformation";
const LOW_PRIORITY = "Low priority";
const LOW_PRIORITY_TODO = "lowPriorityTodo";
export function displayLowPriority() {
  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";
  myTodos.forEach((todo, index) => {
    if (todo.priority === LOW_PRIORITY) {
      displayLowPriorities(todo, index);
    }
  });
}

function displayLowPriorities(todo, index) {
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
