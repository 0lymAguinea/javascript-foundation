import { myTodos } from "./todo";
export function getTodayCount() {
  const todayCount = myTodos.length;
  return todayCount;
}
export function getAllTaskCount() {
  const allCount = myTodos.length;
  return allCount;
}

export function displayTodayCount() {
  const todayCount = document.getElementById("taskCount");
  todayCount.textContent = getTodayCount();
}

export function displayAllTaskCount() {
  const allTasks = document.getElementById("taskCount");
  allTasks.textContent = getAllTaskCount();
}
