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
    if (inputTitle.value === "" || inputDueDate.value === "") {
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
    let textTitle = document.createElement("span");
    let textDate = document.createElement("span");
    textTitle = todos.title;
    textDate = todos.dueDate;
    todoButton.dataset.todoid = index;
    bottomDisplay.append(todoButton);
    todoButton.append(`${textTitle} : ${textDate} `);
    todoButtonItems(todoButton, todos, index);
  });
}
function todoButtonItems(todoButton, todos) {
  todoButton.addEventListener("click", () => {
    clearTodoPage();
    createTodoInformation(todos);
  });
}
function clearTodoPage() {
  const todoPage = document.getElementById("todoPage");
  todoPage.innerHTML = "";
}
function createTodoInformation(todos) {
  const todoPage = document.getElementById("todoPage");

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

  todoPage.append(labelTitle);
  todoPage.append(labelDescription);
  todoPage.append(labelDueDate);
  todoPage.append(labelPriority);
  todoPage.append(labelNote);

  labelTitle.append(todoTitle);
  labelDescription.append(todoDescription);
  labelDueDate.append(todoDueDate);
  labelPriority.append(todoPriority);
  labelNote.append(todoNote);
}
