var readlineSync = require('readline-sync');
let result = '';

let operand = readlineSync.keyIn(
  'What operation would you like to perform? [/,*,-,+] '
);

while (!['/', '*', '-', '+'].includes(operand)) {
  console.log('That is not a valid operation');
  operand = readlineSync.keyIn(
    'What operation would you like to perform? [/,*,-,+] '
  );
}

let numOne = readlineSync.questionInt('Please enter the first number: ', {
  limit: 'This is not a number',
});

let numTwo = readlineSync.questionInt('Please enter the second number: ', {
  limit: 'This is not a number',
});

console.log(numOne);
console.log(numTwo);

if (operand === '/') {
  result = numOne / numTwo;
} else if (operand === '*') {
  result = numOne * numTwo;
} else if (operand === '+') {
  result = numOne + numTwo;
} else if (operator === '-') {
  result = numOne - numTwo;
}
