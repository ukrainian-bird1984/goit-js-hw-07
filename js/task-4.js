const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (!email || !password) {
    alert('Будь ласка, заповніть всі поля форми.');
    return;
  }

  const userData = {
    email,
    password,
  };

  console.log(userData);
  loginForm.reset();
}
