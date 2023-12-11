import { myTodos } from "./todo";
import { Todo } from "./todo";
import { getTodayTodoPriority } from "./features/priority";
import { getTodayTodoIsCheck } from "./features/isComplete";
import { createTodoInformation } from "./todosAdditional/todoInformation";
import { displayTodayCount } from "./features/projectCounter";
export const TODAY_TODO = "todayTodo";

export default function displayTodayTodoForm() {
  getTodoForm();
}

function getTodoForm() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  inputDueDate.value = formattedTodayDate();
  inputDueDate.disabled = true;
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", () => {
    if (inputTitle.value === "") {
      console.log("ERROR");
    } else {
      addTodoToMyTodos(
        inputTitle,
        inputDescription,
        inputDueDate,
        inputPriority,
        inputNote
      );
    }
  });
}
function addTodoToMyTodos(title, description, dueDate, priority, note) {
  myTodos.push(
    new Todo(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      note.value
    )
  );

  displayTodayCount();
  getTodayDate();
}
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
