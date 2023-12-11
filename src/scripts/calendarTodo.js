import { calendarTodoIsCheck } from "./features/isComplete";
import { getCalendarTodoPriority } from "./features/priority";
import { myTodos } from "./todo";
import { createTodoInformation } from "./todosAdditional/todoInformation";
import { displayCalendarCount } from "./features/projectCounter";

export const CALENDAR_SELECTED_TODO = "calendarSelected";

export function displayCalendar() {
  const middleDisplay = document.getElementById("middleDisplay");
  const labelElement = calendarLabel();
  middleDisplay.append(labelElement);
  calendarInput(labelElement);
}

function calendarLabel() {
  const label = document.createElement("label");
  label.textContent = "Pick date";
  return label;
}

function calendarInput(labelElement) {
  const input = document.createElement("input");
  input.type = "date";
  input.name = "calendar";
  input.id = "calendar";
  labelElement.append(input);
  calendarPicked(input);
}
function calendarPicked(input) {
  input.addEventListener("change", () => {
    const pickedDate = input.value;
    displayCalendarPickedTodo(pickedDate);
    displayCalendarCount();
  });
}

export function displayCalendarPickedTodo(pickedDate) {
  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";
  myTodos.forEach((todo, index) => {
    if (todo.dueDate === pickedDate) {
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
  getCalendarTodoPriority();
  calendarTodoIsCheck();
}
function todoButtonItems(todoButton, todo, index) {
  todoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoInformation(todo, index, CALENDAR_SELECTED_TODO);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
