// Day 5: Functions
// Tasks/Activities:

// Activity 1: Function declaration
// Task 1: Write a function to check a number is even or odd and log the result to the console
const num1 = 189;
function even_Odd(num1) {
  num1 % 2 === 0
    ? console.log(num1, "is a even number")
    : console.log(num1, "is an odd number");
}
even_Odd(num1);
// Task 2: Write a function to calculate the square of a number and return the result
function square(n) {
  return n * n;
}
const num2 = 6;
console.log(square(num2));

// -------------------------------------------------------------------------------------

// Activity 2: Function expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console
const findMaxNum = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};
console.log(findMaxNum(19, -76));
// Task 4: Write a function expression to concatenate two strings and return the result
const stringConcatenate = function (str1, str2) {
  return str1 + str2;
};
console.log(stringConcatenate("Red", "bull"));

// -------------------------------------------------------------------------------------

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result
const sum = (n1, n2) => {
  return n1 + n2;
};
console.log(sum(12, 9));
// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value
const findCharater = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
};
console.log("--------------------------");
console.log(findCharater("Mumbai", "z"));
console.log(findCharater("Redbull", "d"));
console.log(findCharater("Pavi", "G"));
console.log("--------------------------");

// -------------------------------------------------------------------------------------

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter
const defaultProduct = (n1, n2 = 5) => {
  return n1 * n2;
};
console.log(defaultProduct(10));
// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age
const greet = (name, age = 54) => {
  return `Hi ${name} your age is ${age}`;
};
console.log(greet("Elon"));

// -------------------------------------------------------------------------------------

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times
const higherOrderFunc1 = (func, num) => {
  for (let i = 1; i <= num; i++) {
    func();
  }
};
const func = () => {
  console.log("Hellow world");
};

higherOrderFunc1(func, 3);
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then
// applies the second function to the result
const higherOrderFunc2 = (func1, func2, value) => {
  const func1Value = func1(value);
  return func2(func1Value);
};
const func1 = (value) => {
  return value * 10;
};
const func2 = (value) => {
  return value * 20;
};
console.log(higherOrderFunc2(func1, func2, 10));

// -------------------------------------------------------------------------------------

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

// Achievement:

// By the end of these activities, students will:

// . Understand and define functions using function declarations, expressions, and arrow functions.
// · Use function parameters and default values effectively.
// · Create and utilize higher-order functions.
// . Apply functions to solve common problems and perform calculations.
// · Enhance code reusability and organization using functions.
