function createContainer() {
  const container = document.createElement("div");
  container.className = "container";
  return container;
}

function createLabel() {
  const label = document.createElement("h2");
  label.textContent = `OlymFans' Restaurant Contact Details`;
  label.id = "contactDetailsLabel";

  return label;
}

function createNumber() {
  const label = document.createElement("label");
  const number = document.createElement("h3");
  label.textContent = "Contact number";
  number.innerHTML = "<span class='bottomDetail'>0912-345-6789</span>";

  label.append(number);

  return label;
}

function createEmail() {
  const label = document.createElement("label");
  const email = document.createElement("a");

  label.textContent = "Email address";
  email.href = "trysomething@yahoo.com";
  email.innerHTML = "<span class='bottomDetail'>pogiko@yahoo.com</span>";
  email.id = "restaurantEmail";

  label.append(email);

  return label;
}

function contactPage() {
  const content = document.getElementById("content");
  const container = createContainer();
  const details = createLabel();
  const number = createNumber();
  const email = createEmail();

  content.append(details);
  container.append(number);
  container.append(email);
  content.append(container);

  return content;
}

export { contactPage };
