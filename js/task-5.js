const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індиго', color: '#3F51B5' },
];
const body = document.querySelector('body');
const btnColorBody = document.querySelector('.change-color');
const textColorName = document.querySelector('span');
btnColorBody.addEventListener('click', onBtnColorChange);
function onBtnColorChange() {
  const randomColor = Math.floor(Math.random() * options.length);
  const selectColor = options[randomColor];
  textColorName.textContent = selectColor.label;
  document.body.style.backgroundColor = selectColor.color;
}