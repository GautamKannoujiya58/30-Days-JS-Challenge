// Day 3: Control Structures
// Task/Activities:

// Activity 1: if-else statments
// Task 1: Write a program to check if a number is positive or negative or zero and log the result to the console
const num = -13;
if (num === 0) {
  console.log(num, "is zero");
} else if (num > 0) {
  console.log(num, "is a positive number");
} else {
  console.log(num, "is a negative number");
}
// Task 2: Write a program to check if a person is elligble to vote (age >= 18) and log the result to the console
const person_age = 20;
if (person_age >= 18) {
  console.log(`age is ${person_age} so elligble to vote`);
} else {
  console.log(`age is ${person_age} so not elligible to vote`);
}

// ----------------------------------------------------------------------------------------

// Activity 2: Nested if-else statments
// Task 3: Write a program to find the largest of three numbers using nested if-else statements
const num1 = 230;
const num2 = 1200;
const num3 = 40;
if (num1 >= num2) {
  if (num1 >= num3) {
    console.log(num1, "is the largest number");
  } else {
    console.log(num3, "is the largest number");
  }
} else {
  if (num2 >= num1) {
    if (num2 >= num3) {
      console.log(num2, "is the largest number");
    } else {
      console.log(num3, "is the largest number");
    }
  }
}

// ----------------------------------------------------------------------------------------

// Activity 3: switch case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console
const day_number = 4;
switch (day_number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Please enter valid input");
}
// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console
const student_score = 85;
switch (true) {
  case student_score >= 90:
    console.log("A grade");
    break;
  case student_score >= 80:
    console.log("B grade");
    break;
  case student_score >= 70:
    console.log("C grade");
    break;
  case student_score >= 60:
    console.log("D grade");
    break;
  default:
    console.log("F grade");
}

// ----------------------------------------------------------------------------------------

// Activity 4: Conditional (ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
const num4 = 5;
num4 % 2 === 0
  ? console.log(num4, "is even number")
  : console.log(num4, "is odd numbers");

//   ----------------------------------------------------------------------------------------

// Activity 5: Combining conditions
// Task 7: Write a program to check if a year is leap year using multiple conditions (divisble by 4, but not 100 unless also divisible by 400) and log the result to the console
const year = 2108;
if (year % 4 === 0) {
  if (year % 100 != 0 || year % 400 === 0) {
    console.log(year, "is a leap year");
  } else {
    console.log(year, "is not a leap year");
  }
} else {
  console.log(year, "is not a leap year");
}

// ----------------------------------------------------------------------------------------

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// Achievement:
// By the end of these activities, students will:

// . Implement and understand basic if-else control flow.
// . Use nested if-else statements to handle multiple conditions.
// . Utilize switch cases for control flow based on specific values.
// . Apply the ternary operator for concise condition checking.
// . Combine multiple conditions to solve more complex problems.
