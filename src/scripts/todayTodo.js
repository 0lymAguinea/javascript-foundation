import { myTodos } from "./todo";
import { getTodayTodoPriority } from "./priority";
import { getTodayTodoIsCheck } from "./isComplete";
import { createTodoInformation } from "./todoInformation";
const TODAY_TODO = "todayTodo";
export function getTodayDate() {
  const todayDate = formattedTodayDate();
  displayTodayTodo(todayDate);
}
function formattedTodayDate() {
  const getDate = new Date();
  const year = getDate.getFullYear().toString();
  const month = (getDate.getMonth() + 1).toString().padStart(2, "0");
  const day = getDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function displayTodayTodo(todayDate) {
  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";
  myTodos.forEach((todo, index) => {
    if (todo.dueDate === todayDate) {
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
  });
  getTodayTodoPriority();
  getTodayTodoIsCheck();
}

function todoButtonItems(todoButton, todo, index) {
  todoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoInformation(todo, index, TODAY_TODO);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
