let currentNumber = '';
let currentOperation = '';
let operand1 = '';

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation === '') {
        operand1 = parseFloat(currentNumber);
        currentNumber = '';
        currentOperation = operation;
    } else {
        calculate();
        currentOperation = operation;
    }
}

function calculate() {
    if (currentOperation !== '') {
        const operand2 = parseFloat(currentNumber);
        let result;

        switch (currentOperation) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
        }

        currentNumber = result.toString();
        currentOperation = '';
        operand1 = result;
        updateDisplay();
    }
}

function clearDisplay() {
    currentNumber = '';
    currentOperation = '';
    operand1 = '';
    updateDisplay();
}

function updateDisplay() {
    document.calculator.display.value = currentNumber;
}
