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
//Get the form created at createTodoPage.js
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
  //Retrieve existing todos from localStorage
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  //Add the new todo to the array
  storedTodo.push(newTodo);

  //Save the entire array back to localStorage
  localStorage.setItem("todos", JSON.stringify(storedTodo));

  //Display middleContentTodos after adding new todos to refresh the page
  displayMiddleContentTodos();

  //Update the count when new todo is added
  displayAllTaskCount();
}
export function displayMiddleContentTodos() {
  createMiddleContentTodo();
}

//Display all todos in the middle
function createMiddleContentTodo() {
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];
  const bottomDisplay = document.getElementById("bottomDisplay");

  bottomDisplay.innerHTML = "";
  storedTodo.forEach((todo, index) => {
    //Create a button that have the title and due date as its text.
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
  //Get the priority value and update the background color of the button
  getTodoPriority();

  //Get the isCheck value if true or false then update the button
  getTodosIsCheck();
}
function todoButtonItems(todoButton, todos, index) {
  todoButton.addEventListener("click", () => {
    clearTodoPage();

    //Handles the creation of the right side display including the delete, edit, and complete button.
    createTodoInformation(todos, index, DEFAULT_TODO);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
