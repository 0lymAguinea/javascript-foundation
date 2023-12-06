import { myTodos } from "./todo";

export function getTodosIsCheck() {
  myTodos.forEach((todo, index) => {
    const isComplete = todo.isComplete;
    todoChecker(isComplete, index);
  });
}
export function getTodayTodoIsCheck() {
  const todayDate = formattedTodayDate();
  dateFilterPriority(todayDate);
}
function formattedTodayDate() {
  const getDate = new Date();
  const year = getDate.getFullYear().toString();
  const month = (getDate.getMonth() + 1).toString().padStart(2, "0");
  const day = getDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function dateFilterPriority(todayDate) {
  myTodos.forEach((todo, index) => {
    if (todo.dueDate === todayDate) {
      const isComplete = todo.isComplete;
      todoChecker(isComplete, index);
    }
  });
}

function todoChecker(isComplete, index) {
  if (isComplete) {
    taskCompleteStatus(index, true);
  } else {
    taskCompleteStatus(index, false);
  }
}
function taskCompleteStatus(index, status) {
  const button = document.querySelector(`[data-todoid="${index}"]`);
  button.classList.toggle("taskCompleteTrue", status);
}
