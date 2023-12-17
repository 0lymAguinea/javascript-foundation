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
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  const submitButton = document.getElementById("submitButton");

  inputDueDate.value = formattedTodayDate();
  inputDueDate.disabled = true;

  submitButton.addEventListener("click", () => {
    if (inputTitle.value.length < 3 || inputDueDate.value === "") {
    } else {
      addTodoToStorage(
        inputTitle,
        inputDescription,
        inputDueDate,
        inputPriority,
        inputNote
      );
    }
  });
}
function addTodoToStorage(
  inputTitle,
  inputDescription,
  inputDueDate,
  inputPriority,
  inputNote
) {
  const newTodo = new Todo(
    inputTitle.value,
    inputDescription.value,
    inputDueDate.value,
    inputPriority.value,
    [inputNote.value]
  );

  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];
  storedTodo.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(storedTodo));

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
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";
  storedTodo.forEach((todo, index) => {
    if (todo.dueDate === todayDate) {
      const todoButton = document.createElement("button");
      let textTitle = document.createElement("span");
      let textDate = document.createElement("span");

      textTitle.textContent = todo.title;
      textDate.textContent = todo.dueDate;
      todoButton.dataset.todoid = index;

      todoButton.className = "todoProjectButton";
      bottomDisplay.append(todoButton);
      todoButton.append(`${textTitle.textContent} : ${textDate.textContent} `);
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
