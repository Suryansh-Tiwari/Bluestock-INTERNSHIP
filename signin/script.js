// Toggle Password Visibility
document.querySelector('.toggle-password').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    //this.textContent = '🙈'; // Change icon
  } else {
    passwordInput.type = 'password';
    this.textContent = '👁'; // Change icon
  }
});