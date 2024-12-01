document.addEventListener("DOMContentLoaded", () => {
    // Select the logout form and "Back to Home" link
    const logoutForm = document.querySelector("form");
    const backToHomeLink = document.querySelector(".back-to-home");
  
    // Handle form submission for logout
    logoutForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Simulate clearing session data (if needed)
      if (window.localStorage) {
        localStorage.clear(); // Clear localStorage
      }
      if (window.sessionStorage) {
        sessionStorage.clear(); // Clear sessionStorage
      }
  
      // Show a confirmation dialog
      const confirmed = confirm("Are you sure you want to log out?");
      if (confirmed) {
        alert("You have successfully logged out."); // Optional feedback
        window.location.href = "index.html"; // Redirect to home page
      }
    });
  
    // Optional: Add a confirmation for the "Back to Home" link
    backToHomeLink.addEventListener("click", (event) => {
      const confirmed = confirm("Do you want to go back to the home page?");
      if (!confirmed) {
        event.preventDefault(); // Prevent navigation if not confirmed
      }
    });
  });