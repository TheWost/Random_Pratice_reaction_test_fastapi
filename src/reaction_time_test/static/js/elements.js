import * as Utils from "./utils.js"

export function createButton(bg = Utils.yellow) {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.style.background = bg;
  return button;
}

export function createBlueButton() {
  const blueButton = createButton();
  blueButton.classList.add("btn-b");
  return blueButton;
}

export function createGreenButton() {
  const greenButton = createButton();
  greenButton.classList.add("btn-c");
  return greenButton;
}

export function createPixelContainer(element = document.createElement("div")) {
  element.classList.add("pixel-box");
  return element;
}

export function createBackButton() {
  const button = createButton(Utils.red)
  button.addEventListener("click", () => {
    window.location.href = "http://localhost:8000/";
  });
  return button
}

export function createSeperator() {
  const seperator = document.createElement("div")
  seperator.classList.add("seperator")
  return seperator
}

export function createSmallNumberContainer() {
  const container = document.createElement("div");
  container.classList.add("small-number-container")
  return container
}
