// todoUtils.js
import { myTodos } from "./todo";
import { displayMiddleContentTodos } from "./todo";
import createTodoPage from "./createTodoPage";
import { getTodoFormToBeEdited } from "./editFormTodo";
import { getTodayFormEdited } from "./editFormTodo";
import { getTodosIsCheck } from "./isComplete";
import { getTodayTodoIsCheck } from "./isComplete";
import { displayAllTaskCount } from "./projectCounter";
import { displayTodayCount } from "./projectCounter";
import { getTodayDate } from "./todayTodo";
import { calendarTodoIsCheck } from "./isComplete";
export function createTodoInformation(todos, index, todoStatus) {
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

  createDeleteButton(index, todoPage, todoStatus);
  createEditButton(todos, index, todoPage, todoStatus);
  createIsCompleteButton(todos, todoPage, todoStatus);
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}

export function createDeleteButton(index, todoPage, todoStatus) {
  const delButton = document.createElement("button");
  delButton.textContent = "Delete task";
  delButton.addEventListener("click", () => {
    delButtonAction(index, todoStatus);
    if (todoStatus === "todayTodo") {
      displayTodayCount();
    } else if (todoStatus === "calendar") {
      console.log("display calendar counts");
    } else if (todoStatus === "defaultTodo") {
      displayAllTaskCount();
    }
  });
  todoPage.append(delButton);
}

export function delButtonAction(index, todoStatus) {
  if (todoStatus === "todayTodo") {
    myTodos.splice(index, 1);
    getTodayDate();
  } else if (todoStatus === "calendar") {
    console.log("delete clicked");
  } else if (todoStatus === "defaultTodo") {
    myTodos.splice(index, 1);
    displayMiddleContentTodos();
  }
  clearTodoPage();
}

export function createEditButton(todos, index, todoPage, todoStatus) {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit task";
  editButton.addEventListener("click", () => {
    editButtonAction(todos, index, todoStatus);
  });
  todoPage.append(editButton);
}

export function editButtonAction(todos, index, todoStatus) {
  clearTodoPage();
  createTodoPage();
  changeTodoTitleToUpdate();
  if (todoStatus === "todayTodo") {
    getTodayFormEdited(todos, index);
  } else if (todoStatus === "calendar") {
    console.log("edit clicked");
  } else if (todoStatus === "defaultTodo") {
    getTodoFormToBeEdited(todos, index);
  }
}

export function changeTodoTitleToUpdate() {
  const todoTitle = document.getElementById("todoTitle");
  todoTitle.textContent = "Edit TODO";
}

export function createIsCompleteButton(todos, todoPage, todoStatus) {
  const completeButton = document.createElement("button");
  completeButton.textContent = "TODO complete";

  completeButton.addEventListener("click", () => {
    isCompleteAction(todos);
    if (todoStatus === "todayTodo") {
      getTodayTodoIsCheck();
    } else if (todoStatus === "calendarSelected") {
      calendarTodoIsCheck();
    } else if (todoStatus === "defaultTodo") {
      getTodosIsCheck();
    }
  });

  todoPage.append(completeButton);
}

export function isCompleteAction(todos) {
  todos.isComplete = !todos.isComplete;
}
