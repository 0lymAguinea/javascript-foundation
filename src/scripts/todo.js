//Responsible to creating todo items
export const myTodos = [];
export const todoState = [true, false, "calendar"];
import { getTodoPriority } from "./priority";
import { getTodosIsCheck } from "./isComplete";
import { displayAllTaskCount } from "./projectCounter";
import { createTodoInformation } from "./todoInformation";
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
    if (inputTitle.value === "" || inputDueDate.value === "") {
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

  displayAllTaskCount();
  displayMiddleContentTodos();
}
export function displayMiddleContentTodos() {
  createMiddleContentTodo();
}
function createMiddleContentTodo() {
  const bottomDisplay = document.getElementById("bottomDisplay");

  bottomDisplay.innerHTML = "";
  myTodos.forEach((todos, index) => {
    const todoButton = document.createElement("button");
    let textTitle = document.createElement("span");
    let textDate = document.createElement("span");
    textTitle = todos.title;
    textDate = todos.dueDate;
    todoButton.dataset.todoid = index;
    todoButton.className = "todoProjectButton";
    bottomDisplay.append(todoButton);
    todoButton.append(`${textTitle} : ${textDate} `);
    todoButtonItems(todoButton, todos, index);
  });
  getTodoPriority();
  getTodosIsCheck();
}
function todoButtonItems(todoButton, todos, index) {
  todoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoInformation(todos, index, todoState[1]);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
