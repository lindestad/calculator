const operatorList = ['+', '-', '*', '/', ' mod '];
function operatorInString(expression) {
    return operatorList.some((e) => expression.includes(e));
}

function evaluateExpression(expression) {
    let result;
    while (operatorInString(expression)) {
        // modulo
    }
    if (expression === '') {result = ''};
    // order of operations
    
}