document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Update the SQL query output based on user input
    const sqlQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;
    document.getElementById('sqlQuery').textContent = sqlQuery;

    // Check for SQL injection attempt
    let message = '';
    let tip = '';

    if (username.includes("'") || password.includes("'")) {
        // Detected potential SQL Injection
        message = 'Login successful (using SQL Injection)';
        tip = 'SQL Injection detected! Attackers can manipulate the database query by entering malicious inputs. To prevent this, developers should use prepared statements and sanitize inputs.';
    } else if (username === 'admin' && password === 'Zabi12345') {
        // Valid login
        message = 'Login successful!';
        tip = 'You entered valid credentials. Good job! Always use secure, unique passwords to avoid brute force or credential stuffing attacks.';
    } else {
        // Invalid login
        message = 'Login failed. Invalid username or password.';
        tip = 'Ensure your credentials are correct. If the website is secure, it will properly validate inputs.';
    }

    // Display the result and tip
    document.getElementById('message').textContent = message;
    document.getElementById('tipContent').textContent = tip;
});
function restartSimulation() {
    location.reload();
}
