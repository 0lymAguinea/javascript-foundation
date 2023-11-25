import "./styles/main.css";
import logoPicture from "./logo.png";
import { homePage } from "./home.js";
import { contactPage } from "./contact.js";

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
  menuButton.textContent = "Menu";

  homeButton.addEventListener("click", () => {
    alert("HOME BUTTON");
  });
  contactButton.addEventListener("click", () => {
    alert("CONTACT BUTTON");
  });
  menuButton.addEventListener("click", () => {
    alert("MENU BUTTON");
  });

  nav.append(homeButton);
  nav.append(contactButton);
  nav.append(menuButton);
  return nav;
}

createHeader();

document.body.append(contactPage());
