function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.attributes.style.value;
  console.dir(bodyEl);
}