// Colors:
const yellow = getComputedStyle(document.documentElement).getPropertyValue("--yellow").trim();
const red = getComputedStyle(document.documentElement).getPropertyValue("--red").trim();

const startButton = createButton();
const body = docuemnt.body


startButton.addEventListener("click", function () {

})


function startGame() {
  const form = document.createElement("form");
  form.classList.add("pixel-box")

  const waitButton = createButton(bg = red);

  const clickButton = createGreenButton();
  clickButton.style.display = "none";

  form.appendChild(waitButton)
  form.appendChild(clickButton)

  let randomNum = Math.floor(Math.random() * 6001) + 2000;
  let startTime;


  clickButton.addEventListener("click", () => {
    const endTime = performance.now();
    const reactionTime = endTime - startTime;
    console.log(reactionTime);
  })

  body.appendChild(form);


  setTimeout(() => {
    toggleTwoButtons(clickButton, waitButton)
    startTime = performance.now();
  }, randomNum);

}

function displayResults() {
  form.display.style = "none";
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

body.appendChild(startButton);
