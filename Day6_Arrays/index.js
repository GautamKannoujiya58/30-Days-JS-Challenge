// Day 6: Arrays
// Tasks/Activities:

// Activity 1: Array Creation and Access
// Task 1: Create an array from numbers 1 to 5 and log the array to the console
const num_arr = [1, 2, 3, 4, 5];
console.log("Number array >>>", num_arr);
// Task 2: Access the first and last element of the array and log them to the console
const first_arrElmt = num_arr[0];
const last_arrElmt = num_arr[num_arr.length - 1];
console.log("First Elmt >>>", first_arrElmt, "Last Elmt >>>", last_arrElmt);

// ------------------------------------------------------------------------------------------------

// Activity 2: Array Methods (Basic)
// Task 3: Use the 'push' method to add a new number to the end of the array and log the updated array
num_arr.push(6);
console.log("updated array after pushing >>>", num_arr);
// Task 4: Use the 'pop' method to pop the last element from the array and log the updated array
num_arr.pop();
console.log("udated array after popping last elmt >>>", num_arr);
// Task 5: Use the 'shift' method to remove the first elmt from the array and log the updated array
num_arr.shift();
console.log("updated array after removing first elmt >>>", num_arr);
// Task 6: Use the 'unshift' method to add an element to the begining of the array and log the updated array
num_arr.unshift("firstElmt");
console.log("updated array after adding first elmt to the array", num_arr);

// ------------------------------------------------------------------------------------------------

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the 'map' method to create a new array where each number is doubled and log the new array
console.log("-------------------------------");
const arr = [9, 5, 3, 4, 1, 0, -2, 16, 8];
console.log("The original array >>>", arr);
const new_Arr = arr.map((elmt) => elmt * 2); // 'map' method returns a new array by default without altering the original array
console.log("new array after doubling the Elmt >>>", new_Arr);
// Task 8: Use the 'filter' method to create a new array with only even numbers and log the new array
const arr_ofEvenNum = arr.filter((elmt) => elmt % 2 === 0); // 'filter' method filters a new array based on the conditon without altering the original array
console.log("new array after filtering only even elmt >>>", arr_ofEvenNum);
// Task 9: Use the 'reduce' method to calculate the sum of all numbers in the array and log the result
const sum_OfArrElmt = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum of array reduced to >>>", sum_OfArrElmt);

// ------------------------------------------------------------------------------------------------

// Activity 4: Array Iteration
// Task 10: Use a 'for' loop to iterate over the array and log each elmt to the console
const userNames = ["John", "Sach", "Pavi", "Anshika", "Danny"];
for (let i = 0; i < userNames.length; i++) {
  console.log(userNames[i]);
}
// Task 11: Use a 'forEach' method to iterate over the array and log each element to the console
userNames.forEach((user, userIndex) =>
  console.log(`User index >>>, ${userIndex} User >>> ${user}`)
);

// ------------------------------------------------------------------------------------------------

// Activity 5: Multi-Dimensional Array
// Task 12: Create a two dimensional array (matrix) and log the entire array to the console
let two_dArray = [];
for (let i = 0; i < 5; i++) {
  let row = [];
  for (let j = 0; j < 5; j++) {
    row.push(j);
  }
  two_dArray.push(row);
}
console.log(two_dArray);
// two dimensional array user
let user_twoDArray = [];
for (let i = 0; i < 5; i++) {
  let row = [];
  for (let j = 0; j < 5; j++) {
    // let userValue = prompt(`Enter the value for matrix position [${i},${j}]`);
    // row.push(userValue);
  }
  user_twoDArray.push(row);
}
// Task 13: Access and log specific value from the two D array
console.log("third row and third column Elmt >>>", two_dArray[3][3]);
console.log("----------------------------------------------");

// ------------------------------------------------------------------------------------------------

// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using
// push, pop, shift, and unshift methods.
// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array
// data.
// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each
// element.
// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.

// Achievements:
// By the end of these activities, students will:
// . Create and manipulate arrays using various methods.
// . Transform and aggregate array data using map, filter, and reduce.
// . Iterate over arrays using loops and iteration methods.
// . Understand and work with multi-dimensional arrays.
