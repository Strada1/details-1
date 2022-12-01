const OPERATION = {
  add: "add",
  multiply: "multiply",
  subtract: "subtract",
  divide: "divide",
};

 export function calculate(a: number, b: number, operation: string) {
  let operationResult;

  switch (operation) {
    case OPERATION.add:
      operationResult = a + b;
      break;

    case OPERATION.multiply:
      operationResult = a * b;
      break;

    case OPERATION.subtract:
      operationResult = a - b;
      break;

    case OPERATION.divide:
      operationResult = a / b;
      break;
  }

  if (operationResult) {
    if (!isFinite(operationResult)) {
      return (operationResult = "error");
    } else {
      return (operationResult = Number(operationResult.toFixed(10)));
    }
  }
}
