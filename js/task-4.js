const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
   event.preventDefault();

  clearErrorMessages();

  const formData = {};
  const formElements = loginForm.elements;

  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].type !== 'submit') {
      const fieldName = formElements[i].name;
      const fieldValue = formElements[i].value.trim();
      formData[fieldName] = fieldValue;

      if (fieldValue === '') {
        alert('All form fields must be filled in');
        return;
      }
    }
  }

  console.log(formData);

  loginForm.reset();
});

function clearErrorMessages() {
}
