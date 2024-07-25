// Day 13 Modules
// Tasks/Activities

import { addTwoNumbers, person_BMI } from "./exportModule.js";
import {
  func1,
  userDetails,
  printUsername,
  greeting,
} from "./multipleFunctions.js";

// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script
console.log("Sum >>>", addTwoNumbers(10, 5));

// Task 2: Create a module that exports an object representing a person with properties and method. Import and use this module in
// another script
console.log(person_BMI.calculate_BMI(), person_BMI.email, person_BMI.address);

// ---------------------------------------------------------------------------------------------------------
// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script
func1();
console.log("Gender >>>", userDetails.gender);
printUsername("John");
greeting();

// Task 4: Create a module that exports a single functions using default exports. Import and use this function in another script
import defaultFunc from "./defaultExport.js";
defaultFunc();

// -------------------------------------------------------------------------------------------------------------

// Activity 3: Importing Entier Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script
// and use its properties
import {
  name,
  phone_num,
  address,
  squareNum,
  area_rectanble,
} from "./multipleExports.js";
console.log("name >>>", name);
console.log("phone >>>", phone_num);
console.log("Adress >>>", address);
squareNum(25);
area_rectanble(34, 11);

// ---------------------------------------------------------------------------------------------------------------

// Activity 4: Using Third Party Modules
// Task 6: Install a third party module (e.g., lodash) using npm. Import and use a function from this module in a script
import _ from "lodash";
const isOdd = (num) => num % 2 != 0;
const res = _.filter([1, 2, 3, 4, 5, 6, 7, 8], isOdd);
console.log("Res >>>", res);
// Task 7: Install a third party module (e.g. axios) using npm. Import and use this module to make a network request in a script
import axios from "axios";
const dataFrom_axios_request = async () => {
  try {
    const res = await axios.get("https://api.kanye.rest/");
    console.log("data request using axios >>>", res.data);
  } catch (error) {
    console.log("Error >>>", error.message);
  }
};
dataFrom_axios_request();

// -----------------------------------------------------------------------------------------------------

// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like webpack or Pracel to bundle multiple JS files into a single file. Write a script to demonstrate
// the bundling process
