// Task/ Activities

// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number,and log the value to the console
var year = 1998;
console.log(year);
// Task 2: Declare a variable using let ,assign it a number,and log the value to the console
let user_name = "Gautam";
console.log(user_name);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, log the value to the console
const isLoggedIn = true;
console.log(isLoggedIn);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, array, boolean, object) and log each variable's type using the typeof operator
let marks = 80;
let email_id = "abc18@gmail.com";
let even_num = [2, 4, 6, 8, 10];
const isEmpty = false;
const user_details = {
  uaer_name: "Gautam",
  email_id: "xyz19@gmail.com",
  age: 25,
  address: "Abc street, London, England 3BX34",
};

console.log("---------------------------");
console.log(typeof marks);
console.log(typeof email_id);
console.log(typeof even_num);
console.log(typeof isEmpty);
console.log(typeof user_details);

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value and log both values to the console
let my_city = "London";
console.log(my_city);
my_city = "Los Angelos";
console.log(my_city);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error
const capital_india = "New Delhi";
// console.log(capital_india);
// capital_india = "Delhi";

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console
const temperature = 41;
const district_name = "Mumbai sub-urban";
const students = ["John", "Joe", "Rocky", "Dana"];
const isPresent = true;
const weather_report = {
  city_name: "Bangalore",
  temp: "42c",
  wind: "23km/h",
  humidity: "51c",
};
const result = null;
const world_capital = undefined;
const large_number = 9007199254740991n;
const unique_key = Symbol("Z23X");

console.log("-----------------------------");
console.log(temperature, typeof temperature);
console.log(district_name, typeof district_name);
console.log(students, typeof students);
console.log(isPresent, typeof isPresent);
console.log(weather_report, typeof weather_report);
console.log(result, typeof result);
console.log(world_capital, typeof world_capital);
console.log(large_number, typeof large_number);
console.log(unique_key, typeof unique_key);

// 2. Reassignment Demo: Create a script that demonstrates the difference between let and const when it comes to reassignment
let display = "AMOLED";
// let display = "FHD" // using let redeclaration is not allowed
display = "FHD+"; // using let reassignment is allowed
console.log("display", display);

const model_number = 234781;
// const model_number = 00987; // using const re-declaration is not allowed
model_number = 87001;
console.log(model_number); // neither reassignment allowed

// ---------------------------------------------------------------------------------------------------

// Achievement:

// By the end of these activities, you will:

// . Know how to declare variables using var, let, and const .
// . Understand the different data types in JavaScript.
// . Be able to use the typeof operator to identify the data type of a variable.
// . Understand the concept of variable reassignment and the immutability of const variables.
