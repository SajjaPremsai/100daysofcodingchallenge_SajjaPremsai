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
    return a / b;
}


const num1 = 12
const num2 = 13
const operation = "subtract"

let result;

switch(operation){
    case 'add':
        result = add(num1, num2);
        break;
    case 'subtract':
        result = subtract(num1, num2);
        break;
    case 'multiply':
        result = multiply(num1, num2);
        break;
    case 'divide':
        result = divide(num1, num2);
        break;
    default:
        console.log('Invalid operation');
        break;
}
console.log(`The result is ${result}`);


