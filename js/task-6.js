function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const boxForItems = document.querySelector('#controls');
const input = boxForItems.querySelector('input');
const btnCreate = boxForItems.querySelector('[data-create]');
const btnDestroyer = boxForItems.querySelector('[data-destroy]');
const boxContainers = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBox);
btnDestroyer.addEventListener('click', destroyBox);

function validateCount(count) {
  return !isNaN(count) && count >= 1 && count <= 100 ? count : false;
}

function createBox() {
  const count = validateCount(input.value);

  if (count) {
    boxContainers.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxContainers.appendChild(box);
    }
  } else {
    alert('Please enter a valid number between 1 and 100');
  }

  input.value = '';
}

function destroyBox() {
  boxContainers.innerHTML = '';
}
