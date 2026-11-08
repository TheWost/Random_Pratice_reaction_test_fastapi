import * as Elements from "./elements.js"
import * as utils from "./utils.js"

const body = document.body
const bestScore = 20;
const currentScore = 50;


function createResultPage() {
  const resultContainer = Elements.createPixelContainer()
  const backButton = Elements.createBackButton()
  const currentScoreText = document.createElement("p").textContent = currentScore;
  const bestScoreText = document.createElement("p").textContent = bestScore;
  const arrow = document.createElement("p").textContent = " -> "

  utils.setBigElement(currentScore, bestScoreText, arrow)

  if (utils.newBest()) {
    utils.setYellowColor(currentScore, bestScoreText, arrow)
  }
  else {
    utils.setRedColor(currentScore)
    utils.setGreenColor(bestScoreText)
  }



  console.log(resultContainer, backButton, currentScore, arrow, currentScore, bestScoreText, currentScoreText)
}




body
