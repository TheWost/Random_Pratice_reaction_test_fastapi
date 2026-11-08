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
