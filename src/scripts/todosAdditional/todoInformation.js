// todoUtils.js
import createTodoPage from "./createTodoPage";
import { myTodos, displayMiddleContentTodos, DEFAULT_TODO } from "../todo";
import {
  getTodoFormToBeEdited,
  getTodayFormEdited,
  getSelectedFormEdited,
  getHighPriorityFormEdited,
  getMediumPriorityFormEdited,
  getLowPriorityFormEdited,
} from "./editFormTodo";
import {
  getTodosIsCheck,
  getTodayTodoIsCheck,
  calendarTodoIsCheck,
  highPriorirityIsCheck,
  mediumPriorirityIsCheck,
  lowPriorityIsCheck,
} from "../features/isComplete";
import {
  displayAllTaskCount,
  displayTodayCount,
  displayCalendarCount,
  displayPriorityCount,
} from "../features/projectCounter";
import { getTodayDate, TODAY_TODO } from "../todayTodo";
import {
  displayCalendarPickedTodo,
  CALENDAR_SELECTED_TODO,
} from "../calendarTodo";
import {
  displayHighPriority,
  HIGH_PRIORITY,
  HIGH_PRIORITY_TODO,
} from "../highPriortyTodo";
import {
  displayMediumPriority,
  MEDIUM_PRIORITY,
  MEDIUM_PRIORITY_TODO,
} from "../mediumPriorityTodo";
import {
  displayLowPriority,
  LOW_PRIORITY,
  LOW_PRIORITY_TODO,
} from "../lowPriorityTodo";

export function createTodoInformation(todos, index, todoStatus) {
  const todoPage = document.getElementById("todoPage");
  const todoInformationPage = document.createElement("div");
  todoInformationPage.id = "todoInformationPage";
  const labelTitle = document.createElement("h5");
  const labelDescription = document.createElement("h5");
  const labelDueDate = document.createElement("h5");
  const labelPriority = document.createElement("h5");
  const labelNote = document.createElement("h5");

  labelTitle.textContent = "Title";
  labelDescription.textContent = "Description";
  labelDueDate.textContent = "Due date";
  labelPriority.textContent = "Priority";
  labelNote.textContent = "Note";

  const todoTitle = document.createElement("p");
  todoTitle.textContent = todos.title;
  const todoDescription = document.createElement("p");
  todoDescription.textContent = todos.description;
  const todoDueDate = document.createElement("p");
  todoDueDate.textContent = todos.dueDate;
  const todoPriority = document.createElement("p");
  todoPriority.textContent = todos.priority;
  const todoNote = document.createElement("p");
  todoNote.textContent = todos.note;

  todoPage.append(todoInformationPage);
  todoInformationPage.append(labelTitle);
  todoInformationPage.append(labelDescription);
  todoInformationPage.append(labelDueDate);
  todoInformationPage.append(labelPriority);
  todoInformationPage.append(labelNote);

  labelTitle.append(todoTitle);
  labelDescription.append(todoDescription);
  labelDueDate.append(todoDueDate);
  labelPriority.append(todoPriority);
  labelNote.append(todoNote);

  const informationButtons = document.createElement("div");
  informationButtons.id = "informationButtons";
  todoPage.append(informationButtons);

  createDeleteButton(index, informationButtons, todoStatus);
  createEditButton(todos, index, informationButtons, todoStatus);
  createIsCompleteButton(todos, informationButtons, todoStatus);
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}

export function createDeleteButton(index, informationButtons, todoStatus) {
  const delButton = document.createElement("button");
  delButton.textContent = "Delete task";
  delButton.id = "delButton";
  delButton.addEventListener("click", () => {
    delButtonAction(index, todoStatus);
    if (todoStatus === DEFAULT_TODO) {
      displayAllTaskCount();
    } else if (todoStatus === TODAY_TODO) {
      displayTodayCount();
    } else if (todoStatus === CALENDAR_SELECTED_TODO) {
      displayCalendarCount();
    } else if (todoStatus === HIGH_PRIORITY_TODO) {
      displayPriorityCount(HIGH_PRIORITY);
    } else if (todoStatus === MEDIUM_PRIORITY_TODO) {
      displayPriorityCount(MEDIUM_PRIORITY);
    } else if (todoStatus === LOW_PRIORITY_TODO) {
      displayPriorityCount(LOW_PRIORITY);
    }
  });
  informationButtons.append(delButton);
}
export function getDateSelected() {
  const input = document.getElementById("calendar");
  return input.value;
}

export function delButtonAction(index, todoStatus) {
  myTodos.splice(index, 1);
  if (todoStatus === DEFAULT_TODO) {
    displayMiddleContentTodos();
  } else if (todoStatus === TODAY_TODO) {
    getTodayDate();
  } else if (todoStatus === CALENDAR_SELECTED_TODO) {
    displayCalendarPickedTodo(getDateSelected());
  } else if (todoStatus === HIGH_PRIORITY_TODO) {
    displayHighPriority();
  } else if (todoStatus === MEDIUM_PRIORITY_TODO) {
    displayMediumPriority();
  } else if (todoStatus === LOW_PRIORITY_TODO) {
    displayLowPriority();
  }
  clearTodoPage();
}

export function createEditButton(todos, index, informationButtons, todoStatus) {
  const editButton = document.createElement("button");
  editButton.id = "editButton";
  editButton.textContent = "Edit task";
  editButton.addEventListener("click", () => {
    editButtonAction(todos, index, todoStatus);
  });
  informationButtons.append(editButton);
}

export function editButtonAction(todos, index, todoStatus) {
  clearTodoPage();
  createTodoPage();
  changeTodoTitleToUpdate();
  if (todoStatus === DEFAULT_TODO) {
    getTodoFormToBeEdited(todos, index);
  } else if (todoStatus === TODAY_TODO) {
    getTodayFormEdited(todos, index);
  } else if (todoStatus === CALENDAR_SELECTED_TODO) {
    getSelectedFormEdited(todos, index);
  } else if (todoStatus === HIGH_PRIORITY_TODO) {
    getHighPriorityFormEdited(todos, index);
  } else if (todoStatus === MEDIUM_PRIORITY_TODO) {
    getMediumPriorityFormEdited(todos, index);
  } else if (todoStatus === LOW_PRIORITY_TODO) {
    getLowPriorityFormEdited(todos, index);
  }
}

export function changeTodoTitleToUpdate() {
  const todoTitle = document.getElementById("todoTitle");
  todoTitle.textContent = "Edit TODO";
}

export function createIsCompleteButton(todos, informationButtons, todoStatus) {
  const completeButton = document.createElement("button");
  completeButton.textContent = "TODO complete";
  completeButton.id = "completeButton";

  completeButton.addEventListener("click", () => {
    isCompleteAction(todos);
    if (todoStatus === DEFAULT_TODO) {
      getTodosIsCheck();
    } else if (todoStatus === CALENDAR_SELECTED_TODO) {
      calendarTodoIsCheck();
    } else if (todoStatus === TODAY_TODO) {
      getTodayTodoIsCheck();
    } else if (todoStatus === HIGH_PRIORITY_TODO) {
      highPriorirityIsCheck(HIGH_PRIORITY);
    } else if (todoStatus === MEDIUM_PRIORITY_TODO) {
      mediumPriorirityIsCheck(MEDIUM_PRIORITY);
    } else if (todoStatus === LOW_PRIORITY_TODO) {
      lowPriorityIsCheck(LOW_PRIORITY);
    }
  });

  informationButtons.append(completeButton);
}

export function isCompleteAction(todos) {
  todos.isComplete = !todos.isComplete;
}
