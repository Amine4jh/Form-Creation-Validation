addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Content Loaded");
})

const form = document.getElementById("registration-form")
const feedbackDiv = document.getElementById("form-feedback")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const usernameInput = document.getElementById("username")
    const usernameValue = usernameInput.value.trim()

    const emailInput = document.getElementById("email")
    const emailValue = emailInput.value.trim()

    const passwordInput = document.getElementById("password")
    const passwordValue = passwordInput.value.trim()

    let isValid = true
    let messages = []

    if (usernameValue.length < 3) {
        isValid = false
        messages.push("Username must be at least 3 characters")
    }
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
        isValid = false
        messages.push("Email must include both '@' and '.' characters")
    }
    if (passwordValue.length < 8) {
        isValid = false
        messages.push("Password must be at least 8 characters")
    }
    
    feedbackDiv.style.display = "block"
    if (isValid) {
        feedbackDiv.textContent = "Registration successful!"
        feedbackDiv.style.color = "#28a745"
    } else {
        feedbackDiv.innerHTML = messages.join("<br>")
        feedbackDiv.style.color = "#dc3545"
    }
})
