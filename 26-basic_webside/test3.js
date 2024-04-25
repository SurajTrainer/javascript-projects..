function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
    const successMsg = document.getElementById("success-msg");
  
    // Check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
      errorMsg.textContent = "Please enter both username and password.";
      successMsg.textContent = "";
    } else {
      // Simulate login validation (can be replaced with actual validation logic)
      if (username === "user" && password === "password") {
        successMsg.textContent = "Login successful!";
        errorMsg.textContent = "";
        // Redirect to another page or perform other actions after successful login
        // For example: window.location.href = "dashboard.html";
      } else {
        errorMsg.textContent = "Invalid username or password.";
        successMsg.textContent = "";
      }
    }
  }
  