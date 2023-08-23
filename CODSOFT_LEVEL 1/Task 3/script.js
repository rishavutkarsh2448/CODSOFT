let currentInput = '';
const displayInput = document.getElementById('displayInput');

function appendToDisplay(value) {
    currentInput += value;
    displayInput.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    displayInput.value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        displayInput.value = currentInput;
    } catch (error) {
        displayInput.value = 'Error';
    }
}
