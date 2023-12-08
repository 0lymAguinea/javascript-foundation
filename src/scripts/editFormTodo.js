import { myTodos } from "./todo";
import { Todo } from "./todo";
import { displayMiddleContentTodos } from "./todo";
import { getTodayDate } from "./todayTodo";

export function getTodoFormToBeEdited(todos, index) {
  const {
    inputTitle,
    inputDescription,
    inputDueDate,
    inputPriority,
    inputNote,
  } = getInputs();

  inputDueDate.removeAttribute("disabled");

  const defaultValues = {
    title: todos.title,
    description: todos.description,
    dueDate: todos.dueDate,
    priority: todos.priority,
    note: todos.note,
  };

  // Assign the current values to the form inputs
  inputTitle.value = defaultValues.title;
  inputDescription.value = defaultValues.description;
  inputDueDate.value = defaultValues.dueDate;
  inputPriority.value = defaultValues.priority;
  inputNote.value = defaultValues.note;

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
  const {
    inputTitle,
    inputDescription,
    inputDueDate,
    inputPriority,
    inputNote,
  } = getInputs();

  disabledTodayDueDate();

  const defaultValues = {
    title: todos.title,
    description: todos.description,
    dueDate: todos.dueDate,
    priority: todos.priority,
    note: todos.note,
  };

  // Assign the current values to the form inputs
  inputTitle.value = defaultValues.title;
  inputDescription.value = defaultValues.description;
  inputDueDate.value = defaultValues.dueDate;
  inputPriority.value = defaultValues.priority;
  inputNote.value = defaultValues.note;

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
      getTodayDate();
    }
  });
}
function getInputs() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  disabledTodayDueDate();
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  return {
    inputTitle,
    inputDescription,
    inputDueDate,
    inputPriority,
    inputNote,
  };
}

function disabledTodayDueDate() {
  const dueDate = document.getElementById("dueDate");
  dueDate.disabled = true;
}

function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
function addEditedTodotoMyTodos(title, description, dueDate, priority, note) {
  myTodos.push(new Todo(title, description, dueDate, priority, note));
}
