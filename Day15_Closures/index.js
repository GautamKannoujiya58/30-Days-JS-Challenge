// Day 15 Closures
// Tasks/Actvities

// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope
// Call the inner function and log the result
function parentFunc() {
  const even_num = 10;
  return function childFunc() {
    // const odd_num = even_num + 1;
    // return odd_num;
    return even_num + 1;
  };
}
const new_func = parentFunc();
console.log(new_func());
// Task 2: Create a 'closure' that maintains a private counter. Implement functions to increment and get the current value of the counter
function parentCount() {
  let counter = 0;
  console.log(counter);
  return function () {
    return `current value >>> ${counter} incremented Value >>>${(counter += 1)}`;
  };
}
const value = parentCount();
console.log(value());

// ---------------------------------------------------------------------------------------------

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with
// each call
function generate_uniqueIDs() {
  let no_ofIds = 0;

  return {
    getUniqueId: function () {
      let stringCharacter = "abcdefghijklmnopqrstuvwxyz";
      let randomNum = Math.random() * 10;
      let index = Math.floor(randomNum);
      // console.log("randomNum >>>", randomNum);
      // console.log("Index >>>", index);
      let uniqueNum = Math.random() * 1000;
      let uniqueId =
        stringCharacter.substring(index, index + 4) + Math.floor(uniqueNum);
      // console.log(uniqueId);
      no_ofIds += 1;
      return uniqueId;
    },
    no_ofIds: function () {
      return no_ofIds;
    },
  };
}
const IDs = generate_uniqueIDs();
console.log(IDs.getUniqueId());
console.log(IDs.no_ofIds());
console.log(IDs.getUniqueId());
console.log(IDs.no_ofIds());
console.log(IDs.getUniqueId());
console.log(IDs.getUniqueId());
console.log(IDs.getUniqueId());
console.log(IDs.getUniqueId());
console.log(IDs.getUniqueId());
console.log(IDs.getUniqueId());
console.log(IDs.getUniqueId());
console.log(IDs.getUniqueId());
console.log(IDs.no_ofIds());
// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name
function userName(userName) {
  return function greetUser() {
    return `Hello ${userName}!`;
  };
}
const greetMsg = userName("Bruce");
console.log(greetMsg());

//---------------------------------------------------------------------------------------------------------

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each
// function logs the correct index
debugger;
let arr_ofFunc = [];
for (let i = 0; i < 5; i++) {
  arr_ofFunc.push(() => {
    console.log(`index >>> ${i}`);
  });
}
arr_ofFunc.forEach((func) => func());

// -----------------------------------------------------------------------------------------------------------

// Activity 4: Module Pattern
// Task 6: Use closure to create a simple module for managing a collection of items. Implement methods to add, remove and list items
function items_collection() {
  let module = [];
  return {
    add: function (items) {
      module.push(items);
    },
    remove: function () {
      module.pop();
    },
    list: function () {
      console.log(module);
    },
  };
}
const collection_module = items_collection();
collection_module.add("Rubber");
collection_module.add("Pencil");
collection_module.add("Keyboard");
collection_module.add("Notebook");
collection_module.list();
collection_module.remove();
collection_module.list();

// -----------------------------------------------------------------------------------------------------------

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations
function memoize_func() {
  let memory_data = {};
  console.log(memory_data);
  return function sum(n1, n2) {
    const data_key = `${n1},${n2}`;
    if (memory_data[data_key] !== undefined) {
      return memory_data[data_key];
    }
    const sum_res = n1 + n2;
    memory_data[data_key] = sum_res;
    return sum_res;
  };
}
const memozied_values = memoize_func();
console.log(memozied_values(10, 15));
console.log(memozied_values(10, 15));
console.log(memozied_values(2, 3));
console.log("-----------------------------");
// Task 8: Create a memoized version of a function that calculates the factorial of a number
function memoize_facto() {
  let cached_facto = {};
  return function calculate_facto(num) {
    const cached_key = num;
    if (cached_facto[cached_key] !== undefined) {
      console.log(`key >>> ${cached_key}: ${cached_facto[cached_key]}`);
      return cached_facto[cached_key];
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    cached_facto[cached_key] = result;
    return result;
  };
}
const fact_num = memoize_facto();
console.log(fact_num(3));
console.log(fact_num(4));
console.log(fact_num(2));
console.log(fact_num(3));

// -------------------------------------------------------------------------------------------------------------
// Feature Request:
// 1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's
// variable.
// 2. Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.
// 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.
// 4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// 5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.

// Achievement:
// By the end of these activities, students will:

// · Understand and create closures in JavaScript.
// . Use closures to maintain private state and create encapsulated modules.
// · Apply closures in practical scenarios like generating unique IDs and memoization.
// . Use closures in loops to capture and use variables correctly.
