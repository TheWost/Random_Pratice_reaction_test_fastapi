const start_button = docuemnt.createElement("button")
const body = docuemnt.body


// Colors:
const yellow = getComputedStyle(document.documentElement).getPropertyValue("--yellow").trim();

start_button.addEventListener("click", function () {

})


function start_game() {
  const form = document.createElement("form");
  form.classList.add("pixel-box")

  const wait_button = create_button(bg = yellow);
  const click_button = create_green_button();

}

function create_button(bg = yellow) {
  const button = document.createElement("button");
  button.classList.add("btn")
  button.style.background = bg
  return button
}

function create_blue_button() {
  const blue_button = create_button()
  blue_button.classList.add("btn-b")
  return blue_button
}

function create_green_button() {
  const green_button = create_button()
  green_button.classList.add("btn-c")
  return green_button
}
