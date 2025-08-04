const form = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const errorEl = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = passwordInput.value;
  if (password === 'thuoc1952') {
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    errorEl.textContent = 'Incorrect password';
  }
});
