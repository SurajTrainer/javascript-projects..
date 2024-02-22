function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleBtn = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        toggleBtn.textContent = "Show Password";
    }
}
