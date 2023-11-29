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
  const labelDescription = document.createElement("label");
  labelDescription.for = "description";
  labelDescription.textContent = "Description";
  const labelDueDate = document.createElement("label");
  labelDueDate.for = "dueDate";
  labelDueDate.textContent = "Due Date";
  const labelPriority = document.createElement("label");
  labelPriority.for = "priority";
  labelPriority.textContent = "Priority";
  const labelNote = document.createElement("label");
  labelNote.for = "note";
  labelNote.textContent = "Note";

  form.append(labels);
  labels.append(labelTitle);
  labels.append(labelDescription);
  labels.append(labelDueDate);
  labels.append(labelPriority);
  labels.append(labelNote);
}

function createFormInput() {
  const form = document.querySelector("form");
  const inputForm = document.createElement("div");
  inputForm.id = "inputForm";

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

  form.append(inputForm);
  inputForm.append(inputTitle);
  inputForm.append(inputDescription);
  inputForm.append(inputDueDate);
  inputSelectOption();
  inputForm.append(inputNote);
  formSubmitButton();
}
function inputSelectOption() {
  const inputForm = document.getElementById("inputForm");

  const inputPriority = document.createElement("select");
  inputPriority.name = "priority";
  inputPriority.id = "priority";
  const optionHighPriority = document.createElement("option");
  optionHighPriority.value = "highPriority";
  optionHighPriority.text = "High priority";
  const optionMediumPriority = document.createElement("option");
  optionMediumPriority.value = "mediumPriority";
  optionMediumPriority.text = "Medium priority";
  const optionLowPriority = document.createElement("option");
  optionLowPriority.value = "lowPriority";
  optionLowPriority.text = "Low priority";

  inputForm.append(inputPriority);
  inputPriority.append(optionHighPriority);
  inputPriority.append(optionMediumPriority);
  inputPriority.append(optionLowPriority);
}
function formSubmitButton() {
  const inputForm = document.getElementById("inputForm");
  const submitButton = document.createElement("button");
  submitButton.textContent = "Add";

  inputForm.append(submitButton);
}
