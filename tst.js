const math = require('mathjs');
const userInput = "10 +   2 *    (   6 - (4 + 1) / 2) + 7"
try {
    console.log(math.evaluate(userInput)); // Outputs: 5
} catch (error) {
    console.error("Invalid expression:", error.message);
}
