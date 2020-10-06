import { renderHome } from "./home";
import { renderContact } from "./contact";
import { renderMenu } from "./menu";

renderHome();

const card = document.getElementById("content");
const tabs = document.querySelectorAll(".tab");

function removeContent() {
  card.querySelector("div").remove();
}

function displayTab(event) {
  let method = event.target.dataset.action;
  removeContent();
  switch (method) {
    case "Menu":
      renderMenu();
      break;
    case "Contact":
      renderContact();
      break;
  }
}

tabs.forEach((tab) => tab.addEventListener("click", displayTab));
