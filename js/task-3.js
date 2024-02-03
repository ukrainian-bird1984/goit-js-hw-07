const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
inputName.addEventListener('input', onNameInput);

function onNameInput() {
  const inputTrim = inputName.value.trim();
  const inputDisplay = inputTrim || 'Anonymous';
  nameOutput.textContent = inputDisplay;
}