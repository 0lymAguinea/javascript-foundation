import { myTodos } from "./todo";

export function getAllTaskCount() {
  const allCount = myTodos.length;
  return allCount;
}

export function displayTodayCount() {
  const todayCount = document.getElementById("taskCount");
  todayCount.textContent = todayDateFilter();
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
