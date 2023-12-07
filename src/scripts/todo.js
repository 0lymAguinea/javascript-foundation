//Responsible to creating todo items
export const myTodos = [];
import { getTodoPriority } from "./priority";
import { getTodosIsCheck } from "./isComplete";
import createTodoPage from "./createTodoPage";
import { displayAllTaskCount } from "./projectCounter";
import { getTodoFormToBeEdited } from "./editFormTodo";
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
    createTodoInformation(todos, index);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
export function createTodoInformation(todos, index) {
  const todoPage = document.getElementById("todoPage");
  const todoInformationPage = document.createElement("div");
  todoInformationPage.id = "todoInformationPage";
  const labelTitle = document.createElement("h5");
  const labelDescription = document.createElement("h5");
  const labelDueDate = document.createElement("h5");
  const labelPriority = document.createElement("h5");
  const labelNote = document.createElement("h5");

  labelTitle.textContent = "Title";
  labelDescription.textContent = "Description";
  labelDueDate.textContent = "Due date";
  labelPriority.textContent = "Priority";
  labelNote.textContent = "Note";

  const todoTitle = document.createElement("p");
  todoTitle.textContent = todos.title;
  const todoDescription = document.createElement("p");
  todoDescription.textContent = todos.description;
  const todoDueDate = document.createElement("p");
  todoDueDate.textContent = todos.dueDate;
  const todoPriority = document.createElement("p");
  todoPriority.textContent = todos.priority;
  const todoNote = document.createElement("p");
  todoNote.textContent = todos.note;

  todoPage.append(todoInformationPage);
  todoInformationPage.append(labelTitle);
  todoInformationPage.append(labelDescription);
  todoInformationPage.append(labelDueDate);
  todoInformationPage.append(labelPriority);
  todoInformationPage.append(labelNote);

  labelTitle.append(todoTitle);
  labelDescription.append(todoDescription);
  labelDueDate.append(todoDueDate);
  labelPriority.append(todoPriority);
  labelNote.append(todoNote);
  createDeleteButton(index, todoPage);
  createEditButton(todos, index, todoPage);
  createIsCompleteButton(todos, todoPage);
}
function createDeleteButton(index, todoPage) {
  const delButton = document.createElement("button");
  delButton.textContent = "Delete task";
  delButton.addEventListener("click", () => {
    delButtonAction(index);
    displayAllTaskCount();
  });
  todoPage.append(delButton);
}
function delButtonAction(index) {
  myTodos.splice(index, 1);
  displayMiddleContentTodos();
  clearTodoPage();
}
function createEditButton(todos, index, todoPage) {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit task";
  editButton.addEventListener("click", () => {
    editButtonAction(todos, index);
  });
  todoPage.append(editButton);
}
function editButtonAction(todos, index) {
  clearTodoPage();
  createTodoPage();
  changeTodoTitleToUpdate();
  getTodoFormToBeEdited(todos, index);
}

function changeTodoTitleToUpdate() {
  const todoTitle = document.getElementById("todoTitle");
  todoTitle.textContent = "Edit TODO";
}

function createIsCompleteButton(todos, todoPage) {
  const completeButton = document.createElement("button");
  completeButton.textContent = "TODO complete";

  completeButton.addEventListener("click", () => {
    if (todos.isComplete === false) {
      isCompleteAction(todos);
      getTodosIsCheck();
    } else if (todos.isComplete === true) {
      isCompleteAction(todos);
      getTodosIsCheck();
    }
  });

  todoPage.append(completeButton);
}
function isCompleteAction(todos) {
  todos.isComplete = !todos.isComplete;
}
