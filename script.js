function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert('Division by zero');
    } else {
        return a/b;
    }
}

const operators = {
  "+": add,
  "-": subtract,
  "×": multiply, // multiplication symbol
  "÷": divide, // division symbol
};

function updateDisplay(char) {
    const topLine = document.getElementById('small-line');
    const botLine = document.getElementById('large-line');
    const maxCharTop = 16;
    const maxCharBot = 10;
    if (!(botLine.textContent.length >= maxCharBot)){
        botLine.textContent = botLine.textContent + '1';
    } else {
        // TODO handle input beyond max length?
    }
    

    // TODO evaluate if some calculation should be executed

    return;
}

function createButton(text) {
    const button = document.createElement('button');
    button.className = "keypad-button";
    button.id = text;
    button.textContent = text;
    button.addEventListener('click', () => updateDisplay(text));
    return button;
}

function populatebuttons(operators){
    const functionRowOne = document.getElementById("function-row-1");
    const functionRowTwo = document.getElementById("function-row-2");
    const keypad = document.getElementById("number-button-container");
    for (let i = 0; i<9; i++) {
        if (i<5) {
            functionRowTwo.appendChild(Object.keys(operators)[i])
        }
    }
}

let testbutton = createButton('12');
const x = document.getElementById('function-row-1');
x.appendChild(testbutton);

testbutton = createButton('112');
const x2 = document.getElementById('function-row-1');
x2.appendChild(testbutton);


// TODO best to move this to a class?
const display = {
    topDisplayStr : '',
    botDisplayStr : '0',
    activeNum : 0,
    activeOperator : null,
}