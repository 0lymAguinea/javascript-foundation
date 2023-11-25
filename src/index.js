import "./styles/main.css";
import logoPicture from "./logo.png";
import { homePage } from "./home.js";
import { contact } from "./contact.js";

const content = document.getElementById("content");

function handleHomeButtonClick() {
  console.log("click homeButton");
}

function handleContactButtonClick() {
  console.log("click contact button");
}

function handleMenuButtonClick() {
  console.log("click menu button");
}

document.body.append(
  homePage(
    handleHomeButtonClick,
    handleContactButtonClick,
    handleMenuButtonClick
  )
);
