// Day 12: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with 'try-catch'
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console
const error_Handling = () => {
  throw new Error("Error thrown intentionally");
};
try {
  error_Handling();
} catch (error) {
  console.log("Error >>>", error.message);
}
// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error
const division = (n1, n2) => {
  if (n2 === 0) {
    throw new Error("division by zero is not allowed!");
  }
  return n1 / n2;
};
try {
  console.log(division(4, 0));
} catch (error) {
  console.log("Error >>>", error.message);
}

// -------------------------------------------------------------------------------------------------------

// Activity 2: Finally Block
// Task 3: Write a scrpit that includes a try-catch block and a finally block. Log message in the try, catch and finally blcoks to
// observe the execution flow
// 1.
try {
  console.log("I am in try!");
} catch (error) {
  console.log("Error >>>", error.message, "I am in catch block!");
} finally {
  console.log("Finally I am in the finally block!");
}
// 2.
try {
  throw new Error("Error occurred!");
} catch (error) {
  console.log("Error >>>", error.message, "I am in catch block");
} finally {
  console.log("Finally I am in finally block!");
}
// 3.
try {
  console.log("I am in try block");
  throw new Error("Error occurred!");
} catch (error) {
  console.log("Error >>>", error.message, "I am in catch block");
} finally {
  console.log("Finally I am in finally block!");
}

// -------------------------------------------------------------------------------------------------------

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and
// handle it using a try-catch block
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
const throwErrorFunc = () => {
  throw new CustomError("This is a custom error");
};
try {
  throwErrorFunc();
} catch (error) {
  if (error instanceof CustomError) {
    console.log("Caught a custom Error >>>", error.message);
  } else {
    console.log("Caught an system/unintended error");
  }
}
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the
// the validation fails. Handle the custom error using a try-catch block
class UserValidationError extends Error {
  constructor() {
    super(message);
    this.name = "UserValidationError";
  }
}

const validatesUserInput = (userInput) => {
  if (!userInput || userInput.trim() === "") {
    throw new UserValidationError("input can't be emty");
  }
  return "valid input";
};
try {
  const funcRes = validatesUserInput(" Hello world");
  console.log(funcRes);
} catch (error) {
  if (error instanceof UserValidationError) {
    console.log("Caught a UservalidationErro >>> ", error.message);
  } else {
    console.log("Caught unexpected Error >>>", error.message);
  }
}

// ------------------------------------------------------------------------------------------

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use '.catch()' to handle the rejection and log an appropriate message
// to the console
const randomPromise = new Promise((resolve, reject) => {
  const num = Math.random() * 100;
  const newNum = Math.floor(num);
  if (newNum % 2 === 0) {
    setTimeout(() => {
      console.log("Promise has been resolved");
      resolve("Promise has been resolved!");
    }, 2000);
  } else {
    setTimeout(() => {
      console.log("Promise has been rejected");
      reject("Promise has been rejected!");
    }, 2000);
  }
});
randomPromise
  .then((res) => console.log("resolved Response >>>", res))
  .catch((error) => console.log("error >>>", error));
// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the
// error message
const asyncRandomPromise = new Promise((resolve, reject) => {
  const num = Math.random() * 100;
  const newNum = Math.floor(num);
  console.log("NewNUM>>>>>>", newNum);
  if (newNum % 2 === 0) {
    setTimeout(() => {
      resolve("async promise has been resolved");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("async promise has been rejected");
    }, 2000);
  }
});

const resolvePromise = async () => {
  try {
    const promiseValue = await asyncRandomPromise;
    console.log(promiseValue);
  } catch (error) {
    console.log("Error>>>", error);
  }
};
resolvePromise();

// ---------------------------------------------------------------------------------------------

// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the 'fetch' API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message
// to the console
fetch("https://api.kanye.ret/") // Invalid URL
  .then((res) => res.json())
  .catch((error) => console.log("Error >>>", error.message)) // Error: fetch failed
  .then((data) => console.log("Data >>>", data)) // undefined
  .catch((error) => console.log("Error >>>", error.message));
// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch.
// Log an appropriate error message
const asyncAPIFetch = async () => {
  try {
    const res = await fetch("https://api.kanye.ret/"); //  Invalid URL
    const data = await res.json();
    console.log("Data from  Async >>>>", data);
  } catch (error) {
    console.log("Error from Async >>>>", error.message); // Error: fetch failed
  }
};
asyncAPIFetch();

// ---------------------------------------------------------------------------------------------------

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.

// Achievement:
// By the end of these activities, students will:
// · Understand and implement basic error handling using try-catch blocks.
// . Use finally blocks to execute code regardless of the try-catch outcome.
// . Create and use custom error classes.
// . Handle errors in promises using .catch() and within async functions using try-catch.
// . Implement graceful error handling when making network requests with the fetch API.
