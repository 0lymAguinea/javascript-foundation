import { myTodos } from "./todo";

export function getTodosIsCheck() {
  myTodos.forEach((todo, index) => {
    const isComplete = todo.isComplete;
    todoChecker(isComplete, index);
  });
}
function todoChecker(isComplete, index) {
  if (isComplete === true) {
    taskCompleteTrue(index);
  } else if (isComplete === false) {
    taskCompleteFalse(index);
  }
}
function taskCompleteTrue(index) {
  const button = document.querySelector(`[data-todoid="${index}"]`);
  button.classList.add("taskCompleteTrue");
}
function taskCompleteFalse(index) {
  const button = document.querySelector(`[data-todoid="${index}"]`);
  button.classList.remove("taskCompleteTrue");
}
