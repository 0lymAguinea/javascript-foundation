import { myTodos } from "./todo";
export function displayEditForm() {
  createEditForm();
  createEditFormLabels();
  createEditFormInput();
  getCurrentInformation();
}
function createEditForm() {
  const todoPage = document.getElementById("todoPage");
  const form = document.createElement("form");
  form.id = "editTodoForm";
  form.method = "post";
  todoPage.append(form);
}
function createEditFormLabels() {
  const form = document.querySelector("form");
  const labels = document.createElement("div");
  labels.id = "labels";

  const labelTitle = document.createElement("label");
  labelTitle.for = "title";
  labelTitle.textContent = "Title";
  labelTitle.id = "labelTitle";
  const labelDescription = document.createElement("label");
  labelDescription.for = "description";
  labelDescription.textContent = "Description";
  labelDescription.id = "labelDescription";
  const labelDueDate = document.createElement("label");
  labelDueDate.for = "dueDate";
  labelDueDate.textContent = "Due Date";
  labelDueDate.id = "labelDueDate";
  const labelPriority = document.createElement("label");
  labelPriority.for = "priority";
  labelPriority.textContent = "Priority";
  labelPriority.id = "labelPriority";
  const labelNote = document.createElement("label");
  labelNote.for = "note";
  labelNote.textContent = "Note";
  labelNote.id = "labelNote";

  form.append(labels);
  labels.append(labelTitle);
  labels.append(labelDescription);
  labels.append(labelDueDate);
  labels.append(labelPriority);
  labels.append(labelNote);
}

function createEditFormInput() {
  const labelTitle = document.getElementById("labelTitle");
  const labelDescription = document.getElementById("labelDescription");
  const labelDueDate = document.getElementById("labelDueDate");
  const labelNote = document.getElementById("labelNote");

  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.name = "title";
  inputTitle.id = "inputTitle";

  const inputDescription = document.createElement("input");
  inputDescription.type = "text";
  inputDescription.name = "description";
  inputDescription.id = "inputDescription";
  inputDescription.placeholder = "Description";

  const inputDueDate = document.createElement("input");
  inputDueDate.type = "date";
  inputDueDate.name = "dueDate";
  inputDueDate.id = "inputDueDate";

  const inputNote = document.createElement("input");
  inputNote.type = "text";
  inputNote.name = "note";
  inputNote.id = "inputNote";
  inputNote.placeholder = "Note";

  labelTitle.append(inputTitle);
  labelDescription.append(inputDescription);
  labelDueDate.append(inputDueDate);
  inputEditSelectOption();
  labelNote.append(inputNote);
  formEditSubmitButton();
}
function inputEditSelectOption() {
  const labelPriority = document.getElementById("labelPriority");

  const inputPriority = document.createElement("select");
  inputPriority.name = "priority";
  inputPriority.id = "inputPriority";
  const optionHighPriority = document.createElement("option");
  optionHighPriority.value = "High priority";
  optionHighPriority.name = "highPriority";
  optionHighPriority.text = "High priority";
  const optionMediumPriority = document.createElement("option");
  optionMediumPriority.value = "Medium priority";
  optionMediumPriority.name = "mediumPriority";
  optionMediumPriority.text = "Medium priority";
  const optionLowPriority = document.createElement("option");
  optionLowPriority.value = "Low priority";
  optionLowPriority.name = "lowPriority";
  optionLowPriority.text = "Low priority";

  labelPriority.append(inputPriority);
  inputPriority.append(optionHighPriority);
  inputPriority.append(optionMediumPriority);
  inputPriority.append(optionLowPriority);
}
function formEditSubmitButton() {
  const labels = document.getElementById("labels");
  const submitButton = document.createElement("button");
  submitButton.textContent = "Add";
  submitButton.id = "submitButton";
  submitButton.type = "button";

  labels.append(submitButton);
}
function getCurrentInformation() {
  myTodos.forEach((todo, index) => {
    const inputTitle = document.getElementById("inputTitle");
    const inputDescription = document.getElementById("inputDescription");
    const inputDueDate = document.getElementById("inputDueDate");
    const inputPriority = document.getElementById("inputPriority");
    const inputNote = document.getElementById("inputNote");
    inputTitle.value = todo.title;
    inputDescription.value = todo.description;
    inputDueDate.value = todo.dueDate;
    inputPriority.value = todo.priority;
    inputNote.value = todo.note;
  });
}
