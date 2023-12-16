import { getTodoPriority } from "./features/priority";
import { getTodosIsCheck } from "./features/isComplete";
import { displayAllTaskCount } from "./features/projectCounter";
import { createTodoInformation } from "./todosAdditional/todoInformation";

export const DEFAULT_TODO = "defaultTodo";

export class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    note = [],
    isComplete = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.isComplete = isComplete;
  }

  addNote(note) {
    this.note.push(note);
  }

  addIsComplete(isComplete) {
    this.isComplete.push(isComplete);
  }
}

export default function displayTodo() {
  getTodoForm();
}

function getTodoForm() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  const submitButton = document.getElementById("submitButton");

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

  displayMiddleContentTodos();
  displayAllTaskCount();
}
export function displayMiddleContentTodos() {
  createMiddleContentTodo();
}

function createMiddleContentTodo() {
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];
  const bottomDisplay = document.getElementById("bottomDisplay");

  bottomDisplay.innerHTML = "";
  storedTodo.forEach((todo, index) => {
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
  });
  getTodoPriority();
  getTodosIsCheck();
}
function todoButtonItems(todoButton, todos, index) {
  todoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoInformation(todos, index, DEFAULT_TODO);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
