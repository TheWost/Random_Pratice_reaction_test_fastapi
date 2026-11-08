import * as Elements from "./elements.js";
import * as Utils from "./utils.js"

const body = document.body;

function createStartButton() {
  const startButton = Elements.createButton();
  startButton.textContent = "START";
  startButton.addEventListener("click", startGame);
  return startButton;
}

function createMainMenu() {
  const container = Elements.createPixelContainer();
  const startButton = createStartButton();
  container.appendChild(startButton);

  return container;
}

function startGame() {
  const menu = document.querySelector(".pixel-box");
  menu.style.display = "none";

  const form = document.createElement("form");
  form.classList.add("pixel-box");

  const waitButton = Elements.createButton(Utils.red);
  waitButton.textContent = "WAIT";

  const clickButton = Elements.createGreenButton();
  clickButton.textContent = "CLICK";
  clickButton.style.display = "none";

  form.appendChild(waitButton);
  form.appendChild(clickButton);

  const randomNum = Math.floor(Math.random() * 6001) + 2000;
  let startTime;

  clickButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const endTime = performance.now();
    const reactionTime = Math.round(endTime - startTime);

    console.log(reactionTime);

    await sendReactionTime(reactionTime);
  });

  body.appendChild(form);

  setTimeout(() => {
    Utils.toggleTwoButtons(clickButton, waitButton);
    startTime = performance.now();
  }, randomNum);
}

async function sendReactionTime(reactionTime) {
  const response = await fetch("/submit_reaction_time", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ reaction_time: reactionTime }),
  });
  if (response.redirected) {
    window.location.href = response.url;
  }
}

const mainMenu = createMainMenu();
body.appendChild(mainMenu);

