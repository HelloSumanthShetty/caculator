onst math = require('mathjs');

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this._checkIfValidNumber(number);
    this.result += number;
  }

  subtract(number) {
    this._checkIfValidNumber(number);
    this.result -= number;
  }

  multiply(number) {
    this._checkIfValidNumber(number);
    this.result *= number;
  }

  divide(number) {
    this._checkIfValidNumber(number);
    if (number === 0) {
      throw new Error("Cannot divide by zero.");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  // Private helper method to validate input
  _checkIfValidNumber(number) {
    if (isNaN(number)) {
      throw new Error("Invalid number input.");
    }
  }

  // Evaluate expression (e.g., '5 + 3 * 2')
 calculate(expression) {
    try {
      // Remove all spaces from the expression
      expression = expression.replace(/\s+/g, '');

      // Check if division by zero is attempted in the expression
      if (expression.includes('/0')) {
        throw new Error("Cannot divide by zero.");
      }

      // Evaluate the expression
      this.result = math.evaluate(expression);
    } catch (error) {
      throw new Error("Invalid expression.");
    }
  }
}
