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
    
    const operatorList = operators.keys.join('');
    const displayState = {
        topText : topLine.textContent,
        botText : botLine.textContent,
        activeOperation : null,
    }
    // move to ternary statement?
    if (operatorList.includes(displayState.topText[-1])) {
        displayState.activeOperation = displayState.topText[-1];
    }

    
    // display can get state of operation from topline
    
    if ("0123456789".includes(char)) { // numeric
        // last character was operator ->
            // clear line, enter new char, move last line to top
        // else -> append char to line
    } else if (operatorList.includes(char)) {// if operator ->
            if (displayState.activeOperation != null){ // if last charactar was operator -> 
                if (displayState.botText === '') {}
                // do operation
                // clear last character, replace with new in topline
            } else {// if not ->
                displayState.topText = displayState.botText + char;// move move to topline with operator
            }
    } else { // not a valid input
        throw new Error("Invalid input given to updateDisplay() - not a number or a supported operator.");
    }
        
    
        

    // TODO evaluate if some calculation should be executed

    return;
}

// function createButton(text) {
//     const button = document.createElement('button');
//     button.className = "keypad-button";
//     button.id = text;
//     button.textContent = text;
//     const charObj = {
//         text : text,
//         operator : text.operator == undefined ? null : text.operator,
//     }

//     button.addEventListener('click', () => updateDisplay(text));
//     return button;
// }

// function populatebuttons(operators){
//     const functionRowOne = document.getElementById("function-row-1");
//     const functionRowTwo = document.getElementById("function-row-2");
//     const keypad = document.getElementById("number-button-container");
//     for (let i = 0; i<9; i++) {
//         if (i<5) {
//             functionRowTwo.appendChild(Object.keys(operators)[i])
//         }
//     }
// }

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

const functionButtonsTop = {
    clearDisplay : {
        text : 'C',
    }
}


// three possible parts - num, operator, num2.
// operator can change the look of num

function calculate(a, b, operator, wrappingFunction) {

}