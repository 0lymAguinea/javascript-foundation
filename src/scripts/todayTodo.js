import { myTodos } from "./todo";
import { getTodayTodoPriority } from "./priority";
import createTodoPage from "./createTodoPage";
import { getTodayTodoIsCheck } from "./isComplete";
import { getTodayFormEdited } from "./editFormTodo";

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
  todoButton.addEventListener("click", (e) => {
    clearTodoPage();
    createTodoInformation(todo, index);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
function createTodoInformation(todos, index) {
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
  getTodayFormEdited(todos, index);
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
      getTodayTodoIsCheck();
    } else if (todos.isComplete === true) {
      isCompleteAction(todos);
      getTodayTodoIsCheck();
    }
  });

  todoPage.append(completeButton);
}
function isCompleteAction(todos) {
  todos.isComplete = !todos.isComplete;
}
