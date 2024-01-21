const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;

  colorSpan.style.color = getContrastColor(randomColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function getContrastColor(hexColor) {
  const threshold = 130;
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > threshold ? 'black' : 'white';
}
