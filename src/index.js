import "./styles/main.css";
import logoPicture from "./logo.png";
import { homePage } from "./home.js";
import { contactPage } from "./contact.js";
import { menuPage } from "./menu.js";

function clearContent() {
  const content = document.getElementById("content");
  let startNode = content.childNodes[2];
  while (startNode) {
    let nextNode = startNode.nextSibling;
    content.removeChild(startNode);
    startNode = nextNode;
  }
}

function tabSwitch() {
  let currentPage = homePage();
  const homeButton = document.getElementById("homeButton");
  const contactButton = document.getElementById("contactButton");
  const menuButton = document.getElementById("menuButton");

  homeButton.addEventListener("click", () => {
    clearContent();
    currentPage = homePage();
  });
  contactButton.addEventListener("click", () => {
    clearContent();
    currentPage = contactPage();
  });
  menuButton.addEventListener("click", () => {
    clearContent();
    currentPage = menuPage();
  });

  return currentPage;
}

function createHeader() {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const restaurantName = document.createElement("h1");
  const myIcon = document.createElement("img");

  myIcon.id = "logo";
  myIcon.src = logoPicture;
  restaurantName.textContent = "OlymFans Restaurant";

  header.append(myIcon);
  header.append(restaurantName);

  content.append(header);
  const nav = createNav();
  content.append(nav);
}

function createNav() {
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  const contactButton = document.createElement("button");
  const menuButton = document.createElement("button");

  homeButton.textContent = "Home";
  homeButton.id = "homeButton";
  contactButton.textContent = "Contact";
  contactButton.id = "contactButton";
  menuButton.textContent = "Menu";
  menuButton.id = "menuButton";

  nav.append(homeButton);
  nav.append(contactButton);
  nav.append(menuButton);
  return nav;
}

createHeader();
document.body.append(tabSwitch());
