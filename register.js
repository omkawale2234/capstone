function validateForm(event) {
    event.preventDefault(); // Prevent form submission to check validation

    // Get form field values
    var phoneEmail = document.getElementById("phone-email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Validate phone/email
    var phoneEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!phoneEmailRegex.test(phoneEmail) && !/^\d{10}$/.test(phoneEmail)) {
      alert("Please enter a valid phone number or email.");
      return false;
    }

    // Validate username
    if (username === "") {
      alert("Please enter a username.");
      return false;
    }

    // Validate password
    if (password === "") {
      alert("Please enter a password.");
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

    // If all checks pass, submit the form
    alert("Sign up successful.");
    document.querySelector('form').submit();
  }