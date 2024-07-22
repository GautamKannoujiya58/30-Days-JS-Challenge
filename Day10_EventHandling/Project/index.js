let position = 1;
let length = 0;

document.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowLeft":
      if (length > 0) {
        moveLeft();
      }
      break;
    case "ArrowRight":
      if (length > 0) {
        moveRight();
      }
      break;
    case "Space":
      addBox();
      break;
    case "Backspace":
      removeBox();
  }
});
function addBox() {
  const divBox = document.createElement("div");
  const section = document.querySelector("section");
  section.appendChild(divBox);
  if (length === 0) {
    divBox.classList.add("active");
  }
  length++;
}

function removeBox() {
  if (position === length) {
    moveLeft();
  }
  document.querySelector("div:last-child").remove();
  length--;
}

function moveLeft() {
  document
    .querySelector(`div:nth-of-type(${position})`)
    .classList.remove("active");
  position--;
  if (position < 1) {
    position = length;
  }
  document
    .querySelector(`div:nth-of-type(${position})`)
    .classList.add("active");
}

function moveRight() {
  document
    .querySelector(`div:nth-of-type(${position})`)
    .classList.remove("active");
  position++;
  if (position > length) {
    position = 1;
  }
  document
    .querySelector(`div:nth-of-type(${position})`)
    .classList.add("active");
}
