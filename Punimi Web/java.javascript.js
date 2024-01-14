function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');

    // Simulate a login request (replace this with actual authentication logic)
    // For simplicity, consider a valid login if the username is "user" and the password is "password"
    if (username === 'user' && password === 'password') {
        // Hide the login form and show the register form
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'none';
        // Clear any previous login error message
        loginError.textContent = '';
    } else {
        // Display an error message for invalid credentials
        loginError.textContent = 'Invalid username or password.';
    }
}

function register() {
    const name = document.getElementById('name').value;
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const address = document.getElementById('address').value;
    const registerError = document.getElementById('registerError');

    // Simulate a registration request (replace this with actual registration logic)
    // For simplicity, consider a successful registration if all fields are filled
    if (name && newUsername && newPassword && address) {
        // Hide the register form and show the login form
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        // Clear any previous registration error message
        registerError.textContent = '';
    } else {
        // Display an error message for incomplete registration fields
        registerError.textContent = 'Please fill in all fields.';
    }
}

function toggleForm(formId) {
    document.getElementById('loginForm').style.display = formId === 'login-form' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = formId === 'register-form' ? 'block' : 'none';
}