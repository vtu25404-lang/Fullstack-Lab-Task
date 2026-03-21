// Name validation
function validateName() {
    let name = document.getElementById("name").value;
    let error = document.getElementById("nameError");

    if (name.length < 3) {
        error.innerText = "Name must be at least 3 characters";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Email validation
function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");

    if (!email.includes("@")) {
        error.innerText = "Enter valid email";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Feedback validation
function validateFeedback() {
    let feedback = document.getElementById("feedback").value;
    let error = document.getElementById("feedbackError");

    if (feedback.length < 10) {
        error.innerText = "Feedback must be at least 10 characters";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Submit on double click
function submitForm() {
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isFeedbackValid = validateFeedback();

    if (isNameValid && isEmailValid && isFeedbackValid) {
        alert("✅ Feedback submitted successfully!");
    } else {
        alert("❌ Please fix errors before submitting");
    }
}