// Initialize variables
let currentOperation = '0';
let lastOperation = '';

// Function to update the screen
function updateScreen() {
    document.getElementById('currentOperationScreen').textContent = currentOperation;
    document.getElementById('lastOperationScreen').textContent = lastOperation;
}

// Function to append a digit or operator to the current operation
function appendToScreen(value) {
    if (currentOperation === '0') {
        currentOperation = value;
    } else {
        currentOperation += value;
    }
    updateScreen();
}

// Function to clear the screen
function clearScreen() {
    currentOperation = '0';
    lastOperation = '';
    updateScreen();
}

// Add event listeners to buttons (e.g., 0-9, +, -, *, /, =)
document.addEventListener('DOMContentLoaded', () => {
    // Example: document.getElementById('button-7').addEventListener('click', () => appendToScreen('7'));
    // Add similar listeners for other buttons
});
