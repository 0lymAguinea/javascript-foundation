import { myTodos } from "./todo";
import { highPriorirityIsCheck } from "./features/isComplete";
import { getHighPriorityTodoPriority } from "./features/priority";
import { createTodoInformation } from "./todosAdditional/todoInformation";
import { displayPriorityCount } from "./features/projectCounter";
import { Todo } from "./todo";

export const HIGH_PRIORITY = "High priority";
export const HIGH_PRIORITY_TODO = "highPriorityTodo";

export default function displayHighPriorityTodoForm() {
  getTodoForm();
}

function getTodoForm() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  inputPriority.value = "High priority";
  inputPriority.disabled = true;
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", () => {
    if (inputTitle.value === "") {
      console.log("ERROR");
    } else {
      addTodoToMyTodos(
        inputTitle,
        inputDescription,
        inputDueDate,
        inputPriority,
        inputNote
      );
    }
  });
}
function addTodoToMyTodos(title, description, dueDate, priority, note) {
  myTodos.push(
    new Todo(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      note.value
    )
  );
  displayPriorityCount(HIGH_PRIORITY);
  displayHighPriority();
}

export function displayHighPriority() {
  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";
  myTodos.forEach((todo, index) => {
    if (todo.priority === HIGH_PRIORITY) {
      displayHighPriorities(todo, index);
    }
  });
  getHighPriorityTodoPriority();
  highPriorirityIsCheck();
}

function displayHighPriorities(todo, index) {
  const todoButton = document.createElement("button");
  let textTitle = document.createElement("span");
  let textDate = document.createElement("span");
  textTitle = todo.title;
  textDate = todo.dueDate;
  todoButton.dataset.todoid = index;
  todoButton.className = "todoProjectButton";
  bottomDisplay.append(todoButton);
  todoButton.append(`${textTitle} : ${textDate} `);
  todoButtonItems(todoButton, todo, index);
}
function todoButtonItems(todoButton, todo, index) {
  todoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoInformation(todo, index, HIGH_PRIORITY_TODO);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
