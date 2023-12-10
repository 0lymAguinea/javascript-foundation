import { myTodos } from "./todo";

const HIGH_PRIORITY = "High priority";
const MEDIUM_PRIORITY = "Medium priority";
const LOW_PRIORITY = "Low priority";

function addPriorityButtonClass(index, priorityClass) {
  const button = document.querySelector(`[data-todoid="${index}"]`);
  button.classList.add(priorityClass);
}

export function getTodoPriority() {
  myTodos.forEach((todo, index) => {
    const priority = todo.priority;
    filterPriority(priority, index);
  });
}

export function getTodayTodoPriority() {
  const getDate = new Date();
  const year = getDate.getFullYear().toString();
  const month = (getDate.getMonth() + 1).toString().padStart(2, "0");
  const day = getDate.getDate().toString().padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;

  dateFilterPriority(todayDate);
}

function dateFilterPriority(todayDate) {
  myTodos.forEach((todo, index) => {
    if (todo.dueDate === todayDate) {
      const priority = todo.priority;
      filterPriority(priority, index);
    }
  });
}

export function getCalendarTodoPriority() {
  const input = document.getElementById("calendar");
  const pickedDate = input.value;
  calendearTodoFilterPriority(pickedDate);
}

function calendearTodoFilterPriority(pickedDate) {
  myTodos.forEach((todo, index) => {
    if (todo.dueDate === pickedDate) {
      const priority = todo.priority;
      filterPriority(priority, index);
    }
  });
}

function filterPriority(priority, index) {
  switch (priority) {
    case HIGH_PRIORITY:
      addPriorityButtonClass(index, "high");
      break;
    case MEDIUM_PRIORITY:
      addPriorityButtonClass(index, "medium");
      break;
    case LOW_PRIORITY:
      addPriorityButtonClass(index, "low");
      break;
    default:
      // Handle other cases if necessary
      break;
  }
}
