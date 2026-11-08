// Colors:
const yellow = getComputedStyle(document.documentElement).getPropertyValue("--yellow").trim();
const red = getComputedStyle(document.documentElement).getPropertyValue("--red").trim();

const body = document.body;

function createStartButton() {
  const startButton = createButton();
  startButton.textContent = "START";
  startButton.addEventListener("click", startGame);
  return startButton;
}

function createPixelContainer() {
  const container = document.createElement("div");
  container.classList.add("pixel-box");
  return container;
}

function createMainMenu() {
  const container = createPixelContainer();
  const startButton = createStartButton();
  container.appendChild(startButton);

  return container;
}

function startGame() {
  const menu = document.querySelector(".pixel-box");
  menu.style.display = "none";

  const form = document.createElement("form");
  form.classList.add("pixel-box");

  const waitButton = createButton(bg = red);
  waitButton.textContent = "WAIT";

  const clickButton = createGreenButton();
  clickButton.textContent = "CLICK";
  clickButton.style.display = "none";

  form.appendChild(waitButton)
  form.appendChild(clickButton)

  let randomNum = Math.floor(Math.random() * 6001) + 2000;
  let startTime;


  clickButton.addEventListener("click", async (e) => {
    e.preventDefault()
    const endTime = performance.now();
    const reactionTime = endTime - startTime;
    console.log(reactionTime);

    await sendReactionTime(reactionTime)

  })

  body.appendChild(form);


  setTimeout(() => {
    toggleTwoButtons(clickButton, waitButton)
    startTime = performance.now();
  }, randomNum);

}

async function sendReactionTime(reactionTime) {
  return await fetch("/reaction_time", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ reaction_time: reactionTime }),
  })
}

function displayResults() {
  form.display.style = "none";
}


function toggleTwoButtons(b1, b2) {
  const b1Hidden = b1.style.display === "none";


  b1.style.display = b1Hidden ? "block" : "none";
  b2.style.display = b1Hidden ? "none" : "block";
}

function createButton(bg = yellow) {
  const button = document.createElement("button");
  button.classList.add("btn")
  button.style.background = bg
  return button
}

function createBlueButton() {
  const blueButton = createButton()
  blueButton.classList.add("btn-b")
  return blueButton
}

function createGreenButton() {
  const greenButton = createButton()
  greenButton.classList.add("btn-c")
  return greenButton
}

let mainMenu = createMainMenu()

body.appendChild(mainMenu);
