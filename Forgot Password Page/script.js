function resetPassword() {
    const email = document.getElementById("email").value;
    if (email) {
        alert("Password reset link sent to " + email);
    } else {
        alert("Please enter a valid email address.");
    }
}
