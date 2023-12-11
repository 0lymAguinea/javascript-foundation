import { myTodos } from "../todo";

export function getAllTaskCount() {
  const allCount = myTodos.length;
  return allCount;
}

export function displayTodayCount() {
  const todayCount = document.getElementById("taskCount");
  todayCount.textContent = todayDateFilter();
}
export function displayCalendarCount() {
  const selectedCount = document.getElementById("taskCount");
  selectedCount.textContent = calendarSelectedCount();
}

export function displayAllTaskCount() {
  const allTasks = document.getElementById("taskCount");
  allTasks.textContent = getAllTaskCount();
}
export function todayDateFilter() {
  const todayDate = formattedTodayDate();
  return displayTodayCountFiltered(todayDate);
}
function formattedTodayDate() {
  const getDate = new Date();
  const year = getDate.getFullYear().toString();
  const month = (getDate.getMonth() + 1).toString().padStart(2, "0");
  const day = getDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function displayTodayCountFiltered(todayDate) {
  const todayTaskCount = myTodos.filter((todo) => todo.dueDate === todayDate);
  return todayTaskCount.length;
}

export function calendarSelectedCount() {
  const pickedDate = formattedSelectDate();
  return displayCalendarPickedTodoCount(pickedDate);
}
function formattedSelectDate() {
  const input = document.getElementById("calendar");
  const pickedDate = input.value;
  return pickedDate;
}
function displayCalendarPickedTodoCount(pickedDate) {
  const pickedCount = myTodos.filter((todo) => todo.dueDate === pickedDate);
  return pickedCount.length;
}

export function displayHighPriortyCount() {
  const taskCount = document.getElementById("taskCount");
  taskCount.textContent = getHighPriorityCount();
}

export function getHighPriorityCount() {
  const count = myTodos.filter((todo) => todo.priority === "High priority");
  return count.length;
}
export function displayMediumPriortyCount() {
  const taskCount = document.getElementById("taskCount");
  taskCount.textContent = getMediumPriorityCount();
}

export function getMediumPriorityCount() {
  const count = myTodos.filter((todo) => todo.priority === "Medium priority");
  return count.length;
}
