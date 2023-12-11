import { myTodos, Todo, displayMiddleContentTodos } from "../todo";
import { getTodayDate } from "../todayTodo";
import { getDateSelected } from "./todoInformation";
import { displayCalendarPickedTodo } from "../calendarTodo";
import { displayHighPriority } from "../highPriortyTodo";
import { displayMediumPriority } from "../mediumPriorityTodo";
import { displayLowPriority } from "../lowPriorityTodo";

export function getTodoFormToBeEdited(todos, index) {
  const {
    inputTitle,
    inputDescription,
    inputDueDate,
    inputPriority,
    inputNote,
  } = getInputs();

  inputDueDate.removeAttribute("disabled");
  inputPriority.removeAttribute("disabled");

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

  disabledDueDate();

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
      clearTodoPage();
      getTodayDate();
    }
  });
}
export function getSelectedFormEdited(todos, index) {
  const {
    inputTitle,
    inputDescription,
    inputDueDate,
    inputPriority,
    inputNote,
  } = getInputs();

  disabledDueDate();

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
      clearTodoPage();
      displayCalendarPickedTodo(getDateSelected());
    }
  });
}

export function getHighPriorityFormEdited(todos, index) {
  const {
    inputTitle,
    inputDescription,
    inputDueDate,
    inputPriority,
    inputNote,
  } = getInputs();

  inputDueDate.removeAttribute("disabled");
  disabledPriorty();

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
      clearTodoPage();
      displayHighPriority();
    }
  });
}

export function getMediumPriorityFormEdited(todos, index) {
  const {
    inputTitle,
    inputDescription,
    inputDueDate,
    inputPriority,
    inputNote,
  } = getInputs();

  inputDueDate.removeAttribute("disabled");
  disabledPriorty();

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
      clearTodoPage();
      displayMediumPriority();
    }
  });
}

export function getLowPriorityFormEdited(todos, index) {
  const {
    inputTitle,
    inputDescription,
    inputDueDate,
    inputPriority,
    inputNote,
  } = getInputs();

  inputDueDate.removeAttribute("disabled");
  disabledPriorty();

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
      clearTodoPage();
      displayLowPriority();
    }
  });
}

function getInputs() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  disabledDueDate();
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

function disabledDueDate() {
  const dueDate = document.getElementById("dueDate");
  dueDate.disabled = true;
}

function disabledPriorty() {
  const priority = document.getElementById("priority");
  priority.disabled = true;
}

function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
function addEditedTodotoMyTodos(title, description, dueDate, priority, note) {
  myTodos.push(new Todo(title, description, dueDate, priority, note));
}
