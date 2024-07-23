//  Day 11: Promises & Async-awaits
// Tasks/Activities

// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 seconds have been passed!");
  }, 2000);
});
promise1.then((msg) => console.log(msg));
// Task 2: Create a promise that rejects with an error message after 2 second timeout and handle the error using .catch()
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error occurred!");
  }, 2000);
});
promise2
  .then((msg) => console.log(msg))
  .catch((error) => console.log("Error:", error));

// ----------------------------------------------------------------------------------------------------

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promise that stimulate fetching data from a server. Chain the promises to log messages in a specific order
function fetchData(serverURL) {
  return fetch(serverURL).then((res) => res.json());
}

fetchData("https://api.kanye.rest/")
  .then((data) => {
    console.log("Data1 >>>", data);
    return fetchData("https://api.kanye.rest/");
  })
  .then((data) => {
    console.log("Data2 >>>", data);
    return fetchData("https://api.kanye.rest/");
  })
  .then((data) => console.log("Data3 >>>", data));

// ----------------------------------------------------------------------------------------------------

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value
const promiseToResolve = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise has been resolved!");
    reject("Error!!!!!!!!!!");
  }, 3000);
  // reject("Error: Error happened while resolving promise");
});
console.log("PromiseToResolve >>>", promiseToResolve);
const AsynFunc = async () => {
  try {
    const resolvedValue = await promiseToResolve;
    console.log("resolved value >>>", resolvedValue);
  } catch (error) {
    console.log("Error >>>>>>>", error);
  }
};
AsynFunc();
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message
const promiseToReject = new Promise((resolve, reject) => {
  reject("Error: Promise has not been resolved❌");
});

const handleError = async () => {
  try {
    const promiseValue = await promiseToReject;
    console.log("Success value >>>", promiseValue);
  } catch (error) {
    console.log("Error >>>", error);
  }
};
handleError();

// ----------------------------------------------------------------------------------------------------

// Activity 4: Fetching Data from an API
// Task 6: Use the 'fetch' API to get data from a public API and log the response data to the console using promises
const fetch_DataFrom_PublicAPI_promises = () => {
  fetch("https://api.freeapi.app/api/v1/public/randomproducts").then((res) =>
    res
      .json()
      .catch((error) => console.log("Erro1 >>>", error))
      .then((data) =>
        data.data.data.forEach((product) =>
          console.log("Products >>>", product.title)
        )
      )
      .catch((error) => console.log("Error2 >>>", error))
  );
};
fetch_DataFrom_PublicAPI_promises();
// Task 7: Use the fetch API to get a data from a public API and log the response data to the console using async/await
const fetch_DataFrom_PublicAPI_asyncAwait = async () => {
  try {
    const apiRes = await fetch(
      "https://api.freeapi.app/api/v1/public/randomusers"
    );
    // console.log("API res >>>", apiRes);
    apiRes
      .json()
      .then((data) =>
        data.data.data.forEach((user) => console.log("users >>>", user.name))
      );
  } catch (error) {
    console.log("Error >>>", error);
  }
};
fetch_DataFrom_PublicAPI_asyncAwait();

// ----------------------------------------------------------------------------------------------------

// Activity 5: Concurrent Promises
// Task 8: Use 'Promise.all' to wait for multiple promises to resolve and then log all their values
const allPromise1 = new Promise((resolve, reject) => {
  resolve("Promise 1 resolved!");
});
const allPromise2 = new Promise((resolve, reject) => {
  resolve(4);
});
const allPromise3 = new Promise((resolve, reject) => {
  resolve("Promise 3 resolved!");
});
const allPromise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "foo");
});
Promise.all([allPromise1, allPromise2, allPromise3, allPromise4]).then(
  (resolvedValues) => console.log(resolvedValues)
);
// Task 9: Use 'Promise.race' to log the value of the first promise that resolves among multiple
const allPromise5 = new Promise((resolve, reject) => {
  resolve("Promise 5 has been resolved!");
});
const allPromise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Promise 6!");
});
const allPromise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Promise 7!");
});
const allPromise8 = new Promise((resolve, reject) => {
  resolve("Promise 8 has been resolved!");
});
Promise.race([allPromise6, allPromise7, allPromise8]).then((resolvedValues) =>
  console.log(resolvedValues)
);

// ----------------------------------------------------------------------------------------------------

// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.

// Achievement:

// By the end of these activities, students will:

// . Understand and create promises, including handling resolved and rejected states.
// . Chain multiple promises to perform sequential asynchronous operations.
// . Use async/await to handle asynchronous code more readably.
// . Fetch data from public APIs using both promises and async/await.
// . Manage multiple concurrent promises using Promise.all and Promise.race
