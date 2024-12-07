// script.js for Bryan's Café Project

// Update the footer with the current year
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Handle form submission
    const form = document.querySelector("#contact form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent actual form submission

            // Simple notification of submission
            alert("Thank you! Your message has been sent.");

            // Reset the form fields
            form.reset();
        });
    }
});
