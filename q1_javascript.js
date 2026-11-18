// Question 1 - Functions and Conditionals
// Topic: Temperature Converter
//
// Task 1:
// Write a function called convertTemp that accepts two arguments:
//   - value: a numeric temperature value
//   - unit: a string, either "C" for Celsius or "F" for Fahrenheit
//
// The function should:
//   - Convert Celsius to Fahrenheit if unit is "C"  →  Formula: (value × 9/5) + 32
//   - Convert Fahrenheit to Celsius if unit is "F"  →  Formula: (value − 32) × 5/9
//   - Return -1 if unit is neither "C" nor "F"
//   - Round the result to 2 decimal places before returning

function convertTemp(value, unit) {
    // Add your code here
    result = 0;
     if (unit === "C") {
        result = Number(((value * 9 / 5) + 32).toFixed(2));
    } else if (unit === "F") {
        result = Number(((value - 32) * 5 / 9).toFixed(2));
    } else {
        return -1;
    }
    return result;}

// Task 2:
// Call the function with the following inputs and print each result:
//   convertTemp(100, "C")      → Expected: 212.0
//   convertTemp(32, "F")       → Expected: 0.0
//   convertTemp(37, "C")       → Expected: 98.6
//   convertTemp("invalid","X") → Expected: -1

// Add your code here
console.log(convertTemp(100, "C"));      // Expected: 212.0
console.log(convertTemp(32, "F"));       // Expected: 0.0
console.log(convertTemp(37, "C"));       // Expected: 98.6
console.log(convertTemp("invalid","X")); // Expected: -1
