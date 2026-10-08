// Practical 5: client-side checks for the StudentHub registration form.
const form = document.querySelector("#registration-form");
const passwordInput = document.querySelector("#password");
const meter = document.querySelector("#password-strength");
const strengthLabel = document.querySelector("#strength-label");

function showError(fieldId, message) {
    const error = document.querySelector("#" + fieldId + "-error");
    if (error) error.textContent = message;
    const actualFieldId = fieldId === "confirm" ? "confirm-password" : fieldId;
    const field = document.querySelector("#" + actualFieldId);
    if (field) field.setAttribute("aria-invalid", message ? "true" : "false");
}

function updatePasswordStrength() {
    const password = passwordInput.value;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (meter) meter.value = score;
    if (strengthLabel) strengthLabel.textContent = "Strength: " + (score === 0 ? "not entered" : ["", "weak", "fair", "good", "strong"][score]);
}
if (passwordInput) passwordInput.addEventListener("input", updatePasswordStrength);

if (form) form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#full-name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mobile = document.querySelector("#mobile").value.trim();
    const password = passwordInput.value;
    const confirm = document.querySelector("#confirm-password").value;
    const course = document.querySelector("#course").value;
    const year = document.querySelector("#year").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.querySelector("#terms").checked;
    let valid = true;

    const checks = [
        ["full-name", /^[A-Za-z][A-Za-z ]{1,49}$/.test(name), "Enter a name using at least 2 letters and spaces only."],
        ["email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), "Enter a valid email address."],
        ["mobile", /^[0-9]{10}$/.test(mobile), "Enter a 10-digit mobile number."],
        ["password", /^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/.test(password), "Use at least 8 characters with a letter and a number."],
        ["confirm", password === confirm && confirm.length > 0, "The passwords do not match."],
        ["course", course !== "", "Choose a course."],
        ["year", year !== "", "Choose your year of study."]
    ];
    for (const [id, passed, message] of checks) {
        showError(id, passed ? "" : message);
        if (!passed) valid = false;
    }
    document.querySelector("#gender-error").textContent = gender ? "" : "Choose an option, or choose Prefer not to say.";
    document.querySelector("#terms-error").textContent = terms ? "" : "You must agree before continuing.";
    if (!gender || !terms) valid = false;
    const status = document.querySelector("#form-message");
    status.textContent = valid ? "All checks passed. This demonstration does not save your details." : "Please correct the highlighted fields and submit again.";
    if (!valid) {
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
    }
});
