function validateForm(event) {
    event.preventDefault(); // Prevent form submission to check validation

    var phoneEmail = document.getElementById("phone-email").value;
    var password = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Check if phone number or email is entered
    if (phoneEmail === "") {
      alert("Please enter your phone number or email.");
      return false;
    }

    // Check if the new password is entered
    if (password === "") {
      alert("Please enter a new password.");
      return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }

    // Check password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }

    // Form is valid, proceed with submission (you can adjust this if needed)
    alert("Password reset successfully.");
    document.querySelector('form').submit(); // Submit the form
  }