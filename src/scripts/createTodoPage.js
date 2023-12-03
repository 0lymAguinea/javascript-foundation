export default function createTodoPage() {
  createForm();
  createFormLabels();
  createFormInput();
}

function createForm() {
  const todoPage = document.getElementById("todoPage");
  const form = document.createElement("form");
  form.id = "createTodoForm";
  form.method = "post";
  todoPage.append(form);
}
function createFormLabels() {
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

function createFormInput() {
  const labelTitle = document.getElementById("labelTitle");
  const labelDescription = document.getElementById("labelDescription");
  const labelDueDate = document.getElementById("labelDueDate");
  const labelNote = document.getElementById("labelNote");

  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.name = "title";
  inputTitle.id = "title";
  inputTitle.placeholder = "Title";

  const inputDescription = document.createElement("input");
  inputDescription.type = "text";
  inputDescription.name = "description";
  inputDescription.id = "description";
  inputDescription.placeholder = "Description";

  const inputDueDate = document.createElement("input");
  inputDueDate.type = "date";
  inputDueDate.name = "dueDate";
  inputDueDate.id = "dueDate";

  const inputNote = document.createElement("input");
  inputNote.type = "text";
  inputNote.name = "note";
  inputNote.id = "note";
  inputNote.placeholder = "Note";

  labelTitle.append(inputTitle);
  labelDescription.append(inputDescription);
  labelDueDate.append(inputDueDate);
  inputSelectOption();
  labelNote.append(inputNote);
  formSubmitButton();
}
function inputSelectOption() {
  const labelPriority = document.getElementById("labelPriority");

  const inputPriority = document.createElement("select");
  inputPriority.name = "priority";
  inputPriority.id = "priority";
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
  optionLowPriority.name = "mediumPriority";
  optionLowPriority.text = "Low priority";

  labelPriority.append(inputPriority);
  inputPriority.append(optionHighPriority);
  inputPriority.append(optionMediumPriority);
  inputPriority.append(optionLowPriority);
}
function formSubmitButton() {
  const labels = document.getElementById("labels");
  const submitButton = document.createElement("button");
  submitButton.textContent = "Add";
  submitButton.id = "submitButton";
  submitButton.type = "button";

  labels.append(submitButton);
}
