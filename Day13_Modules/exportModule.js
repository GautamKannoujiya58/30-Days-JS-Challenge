// Day 13 Modules
// Tasks/Activities

// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script
export const addTwoNumbers = (n1, n2) => {
  return n1 + n2;
};
// Task 2: Create a module that exports an object representing a person with properties and method. Import and use this module in
// another script
export const person_BMI = {
  age: 25,
  Gender: "Male",
  Height: 1.77,
  weight: 80,
  email: "abc@gmail.com",
  address: "ABC street London",
  calculate_BMI: function () {
    const BMI = this.weight / Math.pow(this.Height, 2);
    return BMI;
  },
};

// ---------------------------------------------------------------------------------------------------------

// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script
// Task 4: Create a module that exports a single functions using default exports. Import and use this function in another script

// ------------------------------------------------------------------------------------------------------------

// Activity 3: Importing Entier Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script
// and use its properties

// ------------------------------------------------------------------------------------------------------------

// Activity 4: Using Third Party Modules
// Task 6: Install a third party module (e.g., lodash) using npm. Import and use a function from this module in a script
