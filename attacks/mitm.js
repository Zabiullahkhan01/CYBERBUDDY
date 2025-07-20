let score = 0;
let isConnectionSecure = false;
let interceptedData = [];

// Step 1: Choosing Wi-Fi Network
function chooseNetwork(network, secure) {
    if (network === 'open') {
        isConnectionSecure = false;
        showPopUp("You connected to an Open Public Wi-Fi. This is a risky choice.");
    } else {
        isConnectionSecure = true;
        // updateScore();
        showPopUp("Good choice! You connected to a Secure Wi-Fi network.");
    }
    document.getElementById('wifi-options').classList.add('hidden');
    document.getElementById('address-bar').classList.add('hidden');
    document.getElementById('post-connection').classList.remove('hidden');
}

// Step 2: Navigating to Bank or Social Media
function navigateTo(site) {
    if (!isConnectionSecure && site === 'bank') {
        document.getElementById('fake-warning').classList.remove('hidden');
        document.getElementById('security-status').innerText = "⚠️ Insecure";
        document.getElementById('security-status').classList.remove('secure');
        document.getElementById('security-status').classList.add('insecure');
        showAttackerMonitor();
    }
    document.getElementById('post-connection').classList.add('hidden');
    document.getElementById('website').classList.remove('hidden');
}

// Step 3: Submit Login Data
function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!isConnectionSecure) {
        interceptedData.push({ username, password });
        document.getElementById('intercepted-data').innerText = `Intercepted Username: ${username}, Password: ${password}`;
        showPopUp("Be cautious! Never log into sensitive sites over insecure Wi-Fi.");
        document.getElementById('account-dashboard').classList.remove('hidden');
        document.getElementById("action-section").style.display = "block";
    } else {
        showPopUp("You logged in safely. The connection was secure.");
        document.getElementById('account-dashboard').classList.remove('hidden');
    }

    document.getElementById('website').classList.add('hidden');
}

// Step 4: Restart Simulation
function restartSimulation() {
    location.reload();
}

// Update score
function updateScore() {
    score++;
    document.getElementById('score').innerText = score;
}

// Show attacker’s perspective when connection is insecure
function showAttackerMonitor() {
    document.getElementById('attacker-monitor').classList.remove('hidden');
    
}

// Pop-up feedback
function showPopUp(message) {
    alert(message);
}
