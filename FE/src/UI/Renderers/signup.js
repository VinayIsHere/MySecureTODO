const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const loginLink = document.getElementById('login');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('.submitBtn');

form.addEventListener('submit', function(event) {
    // Prevent default action
    event.preventDefault();

    if (!usernameInput || !passwordInput || !confirmPasswordInput) {
        console.error("One or more inputs are not found");
        return;
    }

    const username = usernameInput.value;
    const pwd = passwordInput.value;
    const confirmPwd = confirmPasswordInput.value;

    // Reset any previous errors
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.classList.remove('active');
    }

    if (pwd !== confirmPwd) {
        // Show error and highlight fields
        passwordInput.classList.add('error');
        confirmPasswordInput.classList.add('error');

        // Show existing error message
        if (errorMessage) {
            errorMessage.classList.add('active');
        }

        return;
    }

    alert('Passwords match');
});
