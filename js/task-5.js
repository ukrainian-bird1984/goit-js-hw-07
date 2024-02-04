const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індиго', color: '#3F51B5' },
];

const body = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const textColorElement = document.querySelector('.color');

changeColorButton.addEventListener('click', onBtnColorChange);

function onBtnColorChange() {
  const randomColor = getRandomHexColor();
  textColorElement.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
