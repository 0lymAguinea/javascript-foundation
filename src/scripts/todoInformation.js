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
export function createTodoInformation(todos, index, isToday) {
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

  createDeleteButton(index, todoPage, isToday);
  createEditButton(todos, index, todoPage, isToday);
  createIsCompleteButton(todos, todoPage, isToday);
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}

export function createDeleteButton(index, todoPage, isToday) {
  const delButton = document.createElement("button");
  delButton.textContent = "Delete task";
  delButton.addEventListener("click", () => {
    delButtonAction(index, isToday);
    if (isToday) {
      displayTodayCount();
    } else {
      displayAllTaskCount();
    }
  });
  todoPage.append(delButton);
}

export function delButtonAction(index, isToday) {
  myTodos.splice(index, 1);
  if (isToday) {
    getTodayDate();
  } else {
    displayMiddleContentTodos();
  }
  clearTodoPage();
}

export function createEditButton(todos, index, todoPage, isToday) {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit task";
  editButton.addEventListener("click", () => {
    editButtonAction(todos, index, isToday);
  });
  todoPage.append(editButton);
}

export function editButtonAction(todos, index, isToday) {
  clearTodoPage();
  createTodoPage();
  changeTodoTitleToUpdate();
  if (isToday) {
    getTodayFormEdited(todos, index);
  } else {
    getTodoFormToBeEdited(todos, index);
  }
}

export function changeTodoTitleToUpdate() {
  const todoTitle = document.getElementById("todoTitle");
  todoTitle.textContent = "Edit TODO";
}

export function createIsCompleteButton(todos, todoPage, isToday) {
  const completeButton = document.createElement("button");
  completeButton.textContent = "TODO complete";

  completeButton.addEventListener("click", () => {
    isCompleteAction(todos);
    if (isToday) {
      getTodayTodoIsCheck();
    } else {
      getTodosIsCheck();
    }
  });

  todoPage.append(completeButton);
}

export function isCompleteAction(todos) {
  todos.isComplete = !todos.isComplete;
}
