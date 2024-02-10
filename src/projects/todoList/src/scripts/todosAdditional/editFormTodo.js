import { displayMiddleContentTodos } from "../todo";
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

  //Removed the disabled attributes
  inputDueDate.removeAttribute("disabled");
  inputPriority.removeAttribute("disabled");

  //Get the current values
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

  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Save changes";

  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  submitButton.addEventListener("click", () => {
    if (inputTitle.value.length >= 3 && inputDueDate.value !== "") {
      if (index >= 0 && index < storedTodo.length) {
        //Directly overwrites the storedTodo values based on its index
        storedTodo[index].title = inputTitle.value;
        storedTodo[index].description = inputDescription.value;
        storedTodo[index].dueDate = inputDueDate.value;
        storedTodo[index].priority = inputPriority.value;
        storedTodo[index].note = inputNote.value;
        //Saved the edited to localStorage
        localStorage.setItem("todos", JSON.stringify(storedTodo));

        clearTodoPage();
        displayMiddleContentTodos();
      } else {
      }
    } else {
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

  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Save changes";

  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  submitButton.addEventListener("click", () => {
    if (inputTitle.value.length >= 3 && inputDueDate.value !== "") {
      if (index >= 0 && index < storedTodo.length) {
        storedTodo[index].title = inputTitle.value;
        storedTodo[index].description = inputDescription.value;
        storedTodo[index].dueDate = inputDueDate.value;
        storedTodo[index].priority = inputPriority.value;
        storedTodo[index].note = inputNote.value;
        localStorage.setItem("todos", JSON.stringify(storedTodo));

        clearTodoPage();
        getTodayDate();
      } else {
      }
    } else {
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

  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Save changes";

  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  submitButton.addEventListener("click", () => {
    if (inputTitle.value.length >= 3 && inputDueDate.value !== "") {
      if (index >= 0 && index < storedTodo.length) {
        storedTodo[index].title = inputTitle.value;
        storedTodo[index].description = inputDescription.value;
        storedTodo[index].dueDate = inputDueDate.value;
        storedTodo[index].priority = inputPriority.value;
        storedTodo[index].note = inputNote.value;
        localStorage.setItem("todos", JSON.stringify(storedTodo));

        clearTodoPage();
        displayCalendarPickedTodo(getDateSelected());
      } else {
      }
    } else {
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

  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Save changes";

  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  submitButton.addEventListener("click", () => {
    if (inputTitle.value.length >= 3 && inputDueDate.value !== "") {
      if (index >= 0 && index < storedTodo.length) {
        storedTodo[index].title = inputTitle.value;
        storedTodo[index].description = inputDescription.value;
        storedTodo[index].dueDate = inputDueDate.value;
        storedTodo[index].priority = inputPriority.value;
        storedTodo[index].note = inputNote.value;
        localStorage.setItem("todos", JSON.stringify(storedTodo));

        clearTodoPage();
        displayHighPriority();
      } else {
      }
    } else {
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

  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Save changes";

  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  submitButton.addEventListener("click", () => {
    if (inputTitle.value.length >= 3 && inputDueDate.value !== "") {
      if (index >= 0 && index < storedTodo.length) {
        storedTodo[index].title = inputTitle.value;
        storedTodo[index].description = inputDescription.value;
        storedTodo[index].dueDate = inputDueDate.value;
        storedTodo[index].priority = inputPriority.value;
        storedTodo[index].note = inputNote.value;
        localStorage.setItem("todos", JSON.stringify(storedTodo));

        clearTodoPage();
        displayMediumPriority();
      } else {
      }
    } else {
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

  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Save changes";

  const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];

  submitButton.addEventListener("click", () => {
    if (inputTitle.value.length >= 3 && inputDueDate.value !== "") {
      if (index >= 0 && index < storedTodo.length) {
        storedTodo[index].title = inputTitle.value;
        storedTodo[index].description = inputDescription.value;
        storedTodo[index].dueDate = inputDueDate.value;
        storedTodo[index].priority = inputPriority.value;
        storedTodo[index].note = inputNote.value;
        localStorage.setItem("todos", JSON.stringify(storedTodo));

        clearTodoPage();
        displayLowPriority();
      } else {
      }
    } else {
    }
  });
}

//Common elements
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
