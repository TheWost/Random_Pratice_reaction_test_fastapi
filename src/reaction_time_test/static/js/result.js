import * as Elements from "./elements.js"
import * as utils from "./utils.js"

export function createResultPage(bestScore, currentScore) {
  const resultContainer = Elements.createPixelContainer();
  const backButton = Elements.createBackButton();

  const currentScoreText = document.createElement("p");
  currentScoreText.textContent = currentScore;

  const bestScoreText = document.createElement("p");
  bestScoreText.textContent = bestScore;

  const arrow = document.createElement("p");
  arrow.textContent = " -> ";

  const elements = [currentScoreText, bestScoreText, arrow];

  utils.setBigElement(...elements);

  styleScores(currentScoreText, bestScoreText, elements);

  backButton.style.width = "400px";

  const separator = Elements.createSeperator();

  resultContainer.append(
    currentScoreText,
    arrow,
    bestScoreText,
    separator,
    backButton
  );

  return resultContainer;
}

function styleScores(currentScore, bestScore, elements) {
  if (utils.newBest()) {
    utils.setYellowColor(...elements);
  } else {
    utils.setRedColor(currentScore);
    utils.setGreenColor(bestScore);
  }
}
