const operatorList = ['+', '-', '*', '/', ' mod '];
// function operatorInString(expression) {
//     return operatorList.some((e) => expression.includes(e));
// }

function evaluateExpression(expression) {
    const regex = regexFromOperatorList(operatorList);
    let s = expression.split(regexFromOperatorList(operatorList));
    let result;
    while (operatorInString(expression)) {
        // modulo
    }
    if (expression === '') {result = ''};
    // order of operations
    
}

function regexFromOperatorList(operatorList) {
    let regexStr = '';
    const reservedCharacters = '\\^$.|?*+';
    for (const operator of operatorList) {
        if (reservedCharacters.includes(operator)) {
            regexStr += '\\' + operator + '|';
        } else {
            regexStr += operator + '|';
        }
    }
    return new RegExp(regexStr.slice(0, -1));
}

let testStr = '12345+455/22*18+19 mod 32*9';



const regex = regexFromOperatorList(operatorList);
console.log(regex);

console.log(testStr.split(regex));
console.log(testStr.split(/\d/g).filter(n => n));