const startButton = docuemnt.createElement("button")
const body = docuemnt.body


// Colors:
const yellow = getComputedStyle(document.documentElement).getPropertyValue("--yellow").trim();

startButton.addEventListener("click", function () {

})


function startGame() {
  const form = document.createElement("form");
  form.classList.add("pixel-box")

  const waitButton = createButton(bg = yellow);
  const clickButton = createGreenButton();

  let randomNum = Math.floor(Math.random() * 6001) + 2000;

  clickButton.style.display = "none";
}


function toggleTwoButtons(b1, b2) {
  const b1Hidden = b1.style.display === "none";


  b1.style.display = b1Hidden ? "block" : "none";
  b2.style.dislpay = b1Hidden ? "none" : "block";
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
