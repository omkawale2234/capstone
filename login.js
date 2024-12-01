document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const loginForm = document.querySelector("form");
    const backToHome = document.querySelector(".back-to-home");
    const usernameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");
    const rememberCheckbox = document.querySelector("input[type='checkbox']");

    // Event listener for form submission
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        // Remember Me functionality
        if (rememberCheckbox.checked) {
            localStorage.setItem("rememberUsername", username);
        } else {
            localStorage.removeItem("rememberUsername");
        }

        // Display a success message
        alert(`Welcome, ${username}!`);

        // Simulate redirection to explore.html
        window.location.href = "explore.html";
    });

    // Populate username if "Remember Me" was previously selected
    const rememberedUsername = localStorage.getItem("rememberUsername");
    if (rememberedUsername) {
        usernameInput.value = rememberedUsername;
        rememberCheckbox.checked = true;
    }

    // Confirmation for Back to Home button
    backToHome.addEventListener("click", (event) => {
        const confirmBack = confirm("Are you sure you want to go back to the homepage?");
        if (!confirmBack) {
            event.preventDefault(); // Only prevent if "Cancel" is clicked
        } else {
            // Allow navigation to index.html
            window.location.href = "home.html"; // Explicitly navigate to index.html
        }
    });
});

  