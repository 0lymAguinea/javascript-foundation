//Responsible to creating todo items
const myTodos = [];
class Todo {
  constructor(title, description, dueDate, priority, note = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
  }

  addNote(note) {
    this.note.push(note);
  }
}

export default function displayTodo() {
  getTodoForm();
}

function getTodoForm() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNote = document.getElementById("note");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", () => {
    addTodoToMyTodos(
      inputTitle,
      inputDescription,
      inputDueDate,
      inputPriority,
      inputNote
    );
    console.log("click");
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
  displayMiddleContentTodos();
}
export function displayMiddleContentTodos() {
  createMiddleContentTodo();
}
function createMiddleContentTodo() {
  const bottomDisplay = document.getElementById("bottomDisplay");
  bottomDisplay.innerHTML = "";
  myTodos.forEach((todos, index) => {
    const todoButton = document.createElement("button");
    todoButton.textContent = todos.title;
    todoButton.dataset.todoid = index;
    bottomDisplay.append(todoButton);
  });
}
