const calculatorState = {
    currentValue: '0',
    previousValue: null,
    currentOperation: null,
    awaitingNewInput: true,
    operationString: '',
};

function updateDisplay() {
    const operationDisplayElement = document.querySelector('#small-line');
    const currentValueDisplayElement = document.querySelector('#large-line');
    
    operationDisplayElement.textContent = calculatorState.operationString;
    currentValueDisplayElement.textContent = calculatorState.currentValue;
}

function calculate() {
    let result;
    const prev = parseFloat(calculatorState.previousValue);
    const current = parseFloat(calculatorState.currentValue);
    switch (calculatorState.currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current !== 0) {
                result = prev / current;
            } else {
                alert('Cannot divide by zero');
                return;
            }
            break;
        case 'modulo':
            if (prev !== 0) {
                result = prev % current;
            } else {
                alert('0 modulo n is undefined - Division by zero!');
                return;
            }
            break;
        default:
            return; // Exit if no operation is set or an unsupported operation is encountered
    }

    // Update the calculator state with the result
    calculatorState.currentValue = result.toString();
    calculatorState.previousValue = null; // Reset previousValue if not chaining operations
    calculatorState.currentOperation = null;
    calculatorState.awaitingNewInput = true;
    calculatorState.operationString = result.toString();
}

function handleNumber(number) {
    if (calculatorState.awaitingNewInput) {
        calculatorState.currentValue = number;
        calculatorState.awaitingNewInput = false;
    } else {
        // Prevents the currentValue from becoming a number with leading zeros
        calculatorState.currentValue = calculatorState.currentValue === '0' ? number : calculatorState.currentValue + number;
    }
    updateDisplay();
}

function handleOperation(operation) {
    if (calculatorState.awaitingNewInput && calculatorState.currentOperation) {
        // Replace the last operation in the string if the user changes their mind
        calculatorState.operationString = calculatorState.operationString.slice(0, -1) + operation;
    } else {
        // Append the current value and the operation to the operation string
        calculatorState.previousValue = calculatorState.currentValue;
        calculatorState.operationString += `${calculatorState.currentValue} ${operation} `;
    }
    
    calculatorState.currentOperation = operation;
    calculatorState.currentValue = '0';
    calculatorState.awaitingNewInput = true;
    updateDisplay();
}

function handleEquals() {
    if (calculatorState.currentOperation && !calculatorState.awaitingNewInput) {
        calculate();
        calculatorState.operationString = '';
        calculatorState.currentOperation = null;
        calculatorState.awaitingNewInput = true;
    }
    updateDisplay();
}

function handleClear() {
    calculatorState.currentValue = '0';
    calculatorState.previousValue = null;
    calculatorState.currentOperation = null;
    calculatorState.awaitingNewInput = true;
    calculatorState.operationString = '';
    updateDisplay();
}

function handleSign() {
    calculatorState.currentValue = (parseFloat(calculatorState.currentValue) * (-1)).toString();
    updateDisplay();
}

document.querySelector('#button-container').addEventListener('click', (event) => {
    if (!event.target.matches('button')) return;

    const buttonValue = event.target.value;
    if (buttonValue >= '0' && buttonValue <= '9') {
        handleNumber(buttonValue);
    } else if (['+', '-', '*', '/', 'modulo'].includes(buttonValue)) {
        handleOperation(buttonValue);
    } else if (buttonValue === 'sign') {
        handleSign();
    } else if (buttonValue === '=') {
        handleEquals();
    } else if (buttonValue === 'C') {
        handleClear();
    }
});