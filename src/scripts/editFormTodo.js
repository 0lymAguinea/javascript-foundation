import { myTodos } from "./todo";
import { Todo } from "./todo";
import { displayMiddleContentTodos } from "./todo";

export function getTodoFormToBeEdited(todos, index) {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  inputTitle.value = todos.title;
  inputDescription.value = todos.description;
  inputDueDate.value = todos.dueDate;
  inputPriority.value = todos.priority;
  inputNote.value = todos.note;

  submitButton.addEventListener("click", () => {
    if (inputTitle.value === "" || inputDueDate.value === "") {
      console.log("error");
    } else {
      myTodos.splice(index, 1);
      addEditedTodotoMyTodos(
        inputTitle.value,
        inputDescription.value,
        inputDueDate.value,
        inputPriority.value,
        inputNote.value
      );
      console.log("click");
      clearTodoPage();
      displayMiddleContentTodos();
    }
  });
}
export function getTodayFormEdited(todos, index) {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  disabledTodayDueDate();
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  inputTitle.value = todos.title;
  inputDescription.value = todos.description;
  inputDueDate.value = todos.dueDate;
  inputPriority.value = todos.priority;
  inputNote.value = todos.note;

  submitButton.addEventListener("click", () => {
    if (inputTitle.value === "" || inputDueDate.value === "") {
      console.log("error");
    } else {
      myTodos.splice(index, 1);
      addEditedTodotoMyTodos(
        inputTitle.value,
        inputDescription.value,
        inputDueDate.value,
        inputPriority.value,
        inputNote.value
      );
      console.log("click");
      clearTodoPage();
      displayMiddleContentTodos();
    }
  });
}

function disabledTodayDueDate() {
  const dueDate = document.getElementById("dueDate");
  dueDate.disabled = true;
}
function formattedTodayDate() {
  const getDate = new Date();
  const year = getDate.getFullYear().toString();
  const month = (getDate.getMonth() + 1).toString().padStart(2, "0");
  const day = getDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
function addEditedTodotoMyTodos(title, description, dueDate, priority, note) {
  myTodos.push(new Todo(title, description, dueDate, priority, note));
}
