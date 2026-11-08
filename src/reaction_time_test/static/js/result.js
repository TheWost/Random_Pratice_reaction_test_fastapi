import * as Elements from "./elements.js"
import * as utils from "./utils.js"

export function createResultPage(bestScore, currentScore) {
  const resultContainer = Elements.createPixelContainer();
  const backButton = Elements.createBackButton();
  backButton.textContent = "BACK";
  const smallNumberContainer = Elements.createSmallNumberContainer()

  const currentScoreText = document.createElement("p");
  currentScoreText.textContent = currentScore;

  const bestScoreText = document.createElement("p");
  bestScoreText.textContent = bestScore;

  const arrow = document.createElement("p");
  arrow.textContent = "---";

  const elements = [currentScoreText, arrow, bestScoreText];

  utils.setBigElement(...elements);

  styleScores(currentScoreText, bestScoreText, elements);

  backButton.style.width = "400px";

  const separator = Elements.createSeperator();

  smallNumberContainer.append(...elements);

  resultContainer.append(
    smallNumberContainer,
    separator,
    backButton
  );

  return resultContainer;
}

function styleScores(currentScore, bestScore, elements) {
  utils.setScoreClass(...elements)
  if (utils.newBest()) {
    utils.setYellowColor(...elements);
  } else {
    utils.setRedColor(currentScore);
    utils.setGreenColor(bestScore);
  }
}
