import { myTodos } from "./todo";
import { Todo } from "./todo";
import { createTodoInformation } from "./todosAdditional/todoInformation";
import { mediumPriorirityIsCheck } from "./features/isComplete";
import { getMediumPriorityTodoPriority } from "./features/priority";
import { displayMediumPriortyCount } from "./features/projectCounter";
const MEDIUM_PRIORITY = "Medium priority";
const MEDIUM_PRIORITY_TODO = "mediumPriorityTodo";

export default function displayMediumPriorityTodoForm() {
  getTodoForm();
}
function getTodoForm() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  inputPriority.value = "Medium priority";
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
  displayMediumPriortyCount();
  displayMediumPriority();
}
export function displayMediumPriority() {
  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";
  myTodos.forEach((todo, index) => {
    if (todo.priority === MEDIUM_PRIORITY) {
      displayMediumPriorities(todo, index);
    }
  });
  getMediumPriorityTodoPriority();
  mediumPriorirityIsCheck();
}

function displayMediumPriorities(todo, index) {
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
    createTodoInformation(todo, index, MEDIUM_PRIORITY_TODO);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
