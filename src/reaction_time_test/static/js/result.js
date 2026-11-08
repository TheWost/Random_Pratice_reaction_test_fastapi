import * as Elements from "./elements.js"
import * as utils from "./utils.js"

export function createResultPage(currentScore, bestScore) {
  const resultContainer = Elements.createPixelContainer();
  const backButton = Elements.createBackButton();
  backButton.textContent = "BACK";
  const smallNumberContainer = Elements.createSmallNumberContainer()

  const currentScoreText = document.createElement("p");
  currentScoreText.textContent = currentScore + "ms";

  const bestScoreText = document.createElement("p");
  bestScoreText.textContent = bestScore + "ms";

  const arrow = document.createElement("p");
  arrow.textContent = "---";

  const elements = [currentScoreText, arrow, bestScoreText];

  utils.setBigElement(...elements);

  styleScores(currentScore, bestScore, elements);

  backButton.style.width = "100%";

  smallNumberContainer.append(...elements);

  resultContainer.append(
    smallNumberContainer,
    backButton
  );

  return resultContainer;
}

function styleScores(currentScore, bestScore, elements) {
  utils.setScoreClass(...elements)
  if (utils.newBest(currentScore, bestScore)) {
    utils.setYellowColor(...elements);
  } else {
    const currentScoreText = elements[0]
    const bestScoreText = elements[2]
    utils.setRedColor(currentScoreText);
    utils.setGreenColor(bestScoreText);
  }
}
