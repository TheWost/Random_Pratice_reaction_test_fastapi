export const yellow = getComputedStyle(document.documentElement)
  .getPropertyValue("--yellow").trim();

export const red = getComputedStyle(document.documentElement)
  .getPropertyValue("--red").trim();

export function toggleTwoButtons(b1, b2) {
  const b1Hidden = b1.style.display === "none";

  b1.style.display = b1Hidden ? "block" : "none";
  b2.style.display = b1Hidden ? "none" : "block";
}

export function createButton(bg = yellow) {
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
