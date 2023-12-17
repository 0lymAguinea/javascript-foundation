//function starts at "display" handles the creating and delete todos at todoInformation.js
//function start at "get" are for getting the todo counts after navigating todos at left display

//Task counter for todo.js
export function getAllTaskCount() {
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];
  const allCount = storedTodo.length;
  return allCount;
}
//Task counter for todayTodo.js
export function displayTodayCount() {
  const todayCount = document.getElementById("taskCount");
  todayCount.textContent = todayDateFilter();
}
//Task counter for calendar.js
export function displayCalendarCount() {
  const selectedCount = document.getElementById("taskCount");
  selectedCount.textContent = calendarSelectedCount();
}
export function displayAllTaskCount() {
  const allTasks = document.getElementById("taskCount");
  allTasks.textContent = getAllTaskCount();
}
//Filter dates to be today only
export function todayDateFilter() {
  const todayDate = formattedTodayDate();
  return displayTodayCountFiltered(todayDate);
}
//Get the current date
function formattedTodayDate() {
  const getDate = new Date();
  const year = getDate.getFullYear().toString();
  const month = (getDate.getMonth() + 1).toString().padStart(2, "0");
  const day = getDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function displayTodayCountFiltered(todayDate) {
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];
  const todayTaskCount = storedTodo.filter(
    (todo) => todo.dueDate === todayDate
  );
  return todayTaskCount.length;
}
//Handles the counting of the selected date
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
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];
  const pickedCount = storedTodo.filter((todo) => todo.dueDate === pickedDate);
  return pickedCount.length;
}
//Get either the high, medium, low priority task counts
export function displayPriorityCount(priority) {
  const taskCount = document.getElementById("taskCount");
  taskCount.textContent = getPriorityCount(priority);
}

export function getPriorityCount(priority) {
  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];
  const count = storedTodo.filter((todo) => todo.priority === priority);
  return count.length;
}
