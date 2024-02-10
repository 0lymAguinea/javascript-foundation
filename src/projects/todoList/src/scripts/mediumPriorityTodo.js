import { Todo } from "./todo";
import { createTodoInformation } from "./todosAdditional/todoInformation";
import { mediumPriorirityIsCheck } from "./features/isComplete";
import { getPriorityTodoPriority } from "./features/priority";
import { displayPriorityCount } from "./features/projectCounter";

export const MEDIUM_PRIORITY = "Medium priority";
export const MEDIUM_PRIORITY_TODO = "mediumPriorityTodo";

export default function displayMediumPriorityTodoForm() {
  getTodoForm();
}
function getTodoForm() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  const submitButton = document.getElementById("submitButton");

  inputPriority.value = "Medium priority";
  inputPriority.disabled = true;

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

  displayPriorityCount(MEDIUM_PRIORITY);
  displayMediumPriority();
}

export function displayMediumPriority() {
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";

  storedTodo.forEach((todo, index) => {
    if (todo.priority === MEDIUM_PRIORITY) {
      displayMediumPriorities(todo, index);
    }
  });
  getPriorityTodoPriority(MEDIUM_PRIORITY);
  mediumPriorirityIsCheck(MEDIUM_PRIORITY);
}

function displayMediumPriorities(todo, index) {
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
function todoButtonItems(todoButton, todo, index) {
  todoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoInformation(todo, index, MEDIUM_PRIORITY_TODO);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
