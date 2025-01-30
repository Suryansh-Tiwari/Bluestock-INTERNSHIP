// Toggle Password Visibility
document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });
 
    function goToSignIn() {
            window.location.href = 'sign-in.html'; // Redirect to the sign-in page
          }
      