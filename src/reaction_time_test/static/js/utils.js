export const yellow = getComputedStyle(document.documentElement)
  .getPropertyValue("--yellow").trim();

export const red = getComputedStyle(document.documentElement)
  .getPropertyValue("--red").trim();

export const green = getComputedStyle(document.documentElement)
  .getPropertyValue("--green").trim();

export const ink = getComputedStyle(document.documentElement)
  .getPropertyValue("--ink").trim();

export function toggleTwoButtons(b1, b2) {
  const b1Hidden = b1.style.display === "none";

  b1.style.display = b1Hidden ? "block" : "none";
  b2.style.display = b1Hidden ? "none" : "block";
}

export function setBigElement(...elements) {
  for (const element of elements) {
    element.classList.add("big-element")
  }
}


export function setYellowColor(...elements) {
  elements.forEach(element => {
    element.style.color = yellow;
  })
}

export function setRedColor(...elements) {
  elements.forEach(element => {
    element.style.color = red;
  })
}

export function setGreenColor(...elements) {
  elements.forEach(element => {
    element.style.color = green;
  })
}

export function setInkColor(...elements) {
  elements.forEach(element => {
    element.style.color = ink;
  })
}

export function newBest(currentScore, bestScore) {
  return currentScore < bestScore;
}

export function setScoreClass(...elements) {
  elements.forEach(element => {
    element.classList.add("score")
  })
}

export function setCustomSize(size, ...elements) {
  elements.forEach(element => {
    element.style.fontSize = size;
  })
}
