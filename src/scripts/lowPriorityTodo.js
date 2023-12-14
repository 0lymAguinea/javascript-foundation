import { Todo } from "./todo";
import { createTodoInformation } from "./todosAdditional/todoInformation";
import { getPriorityTodoPriority } from "./features/priority";
import { lowPriorityIsCheck } from "./features/isComplete";
import { displayPriorityCount } from "./features/projectCounter";

export const LOW_PRIORITY = "Low priority";
export const LOW_PRIORITY_TODO = "lowPriorityTodo";

export default function displayLowPriorityTodoForm() {
  getTodoForm();
}

function getTodoForm() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  const submitButton = document.getElementById("submitButton");

  inputPriority.value = "Low priority";
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

  displayPriorityCount(LOW_PRIORITY);
  displayLowPriority();
}

export function displayLowPriority() {
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";
  storedTodo.forEach((todo, index) => {
    if (todo.priority === LOW_PRIORITY) {
      displayLowPriorities(todo, index);
    }
  });
  getPriorityTodoPriority(LOW_PRIORITY);
  lowPriorityIsCheck(LOW_PRIORITY);
}

function displayLowPriorities(todo, index) {
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
    createTodoInformation(todo, index, LOW_PRIORITY_TODO);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
