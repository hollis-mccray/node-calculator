const readlineSync = require('readline-sync');
const operationList = {
  '/': (x, y) => x / y,
  '*': (x, y) => x * y,
  '-': (x, y) => x - y,
  '+': (x, y) => x + y,
};

function evaluator(operations, operator, num1, num2) {
  return operations[operator](num1, num2);
}

function calculateResult(operations) {
  operators = Object.keys(operations);

  const operator = readlineSync.question(
    `What operation would you like to perform? [${operators.join(', ')}] `,
    {
      limit: operators,
      limitMessage: 'That is not a valid operation',
    }
  );

  const numOne = readlineSync.questionInt('Please enter the first number: ', {
    limitMessage: 'This is not a number',
  });

  const numTwo = readlineSync.questionInt('Please enter the second number: ', {
    limitMessage: 'This is not a number',
  });

  result = evaluator(operations, operator, numOne, numTwo);

  console.log(`The result is: ${result}`);
}

calculateResult(operationList);
