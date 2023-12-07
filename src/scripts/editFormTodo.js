import { myTodos } from "./todo";
import { Todo } from "./todo";
import { displayMiddleContentTodos } from "./todo";
export function getTodoFormToBeEdited(todos, index) {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  const submitButton = document.getElementById("submitButton");

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
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
function addEditedTodotoMyTodos(title, description, dueDate, priority, note) {
  myTodos.push(new Todo(title, description, dueDate, priority, note));
}
