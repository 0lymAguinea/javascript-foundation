import { myTodos } from "./todo";
const HIGH_PRIORITY = "High priority";
const MEDIUM_PRIORITY = "Medium priority";
const LOW_PRIORITY = "Low priority";

export function getTodoPriorty() {
  myTodos.forEach((todo, index) => {
    const priority = todo.priority;
    filterPriorty(priority, index);
  });
}
function filterPriorty(priority, index) {
  if (priority === HIGH_PRIORITY) {
    addHighPriortyButtonClass(index);
  } else if (priority === MEDIUM_PRIORITY) {
    addMediumPriortyButtonClass(index);
  } else if (priority === LOW_PRIORITY) {
    addLowPriortyButtonClass(index);
  }
}
function addHighPriortyButtonClass(index) {
  const button = document.querySelector(`[data-todoid="${index}"]`);
  button.classList.add("high");
}
function addMediumPriortyButtonClass(index) {
  const button = document.querySelector(`[data-todoid="${index}"]`);
  button.classList.add("medium");
}
function addLowPriortyButtonClass(index) {
  const button = document.querySelector(`[data-todoid="${index}"]`);
  button.classList.add("low");
}
