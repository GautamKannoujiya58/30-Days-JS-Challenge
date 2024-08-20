// Day 20: LocalStorage & SessionStorage
// Tasks/Activities:

// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to 'localStorage' and retrieve it. Log the retrieved value
console.log("Hi I am from index.js");
const customerId = "123Abc";
localStorage.setItem("id", customerId);
const storedValue = localStorage.getItem("id");
console.log("retrieved value:", storedValue);
// Task 2: Write a script to save an object to 'localStorage' by converting it to a JSON string. Retrieve and parse the object, then log it.
const user_obj = {
  name: "Pavi",
  designation: "Banker",
  address: "into the void with Cassandra Nova 😂",
};
const JSON_string = JSON.stringify(user_obj);
localStorage.setItem("user", JSON_string);

const retrieved_JSON = localStorage.getItem("user");
const retrieved_obj = JSON.parse(retrieved_JSON);
console.log(retrieved_obj);

// ---------------------------------------------------------------------------------------------------

// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g. name and email) to 'localStorage' when submitted. Retrieve and display
// the saved data on page load.

const userForm = document.querySelector("#userForm");
console.log("userForm >>>", userForm);
const savedUser = document.querySelector("#savedUser");
console.log("savedUser >>>", savedUser);

// Checking if already anything there in the localStorage
const onLoadUserInfo = localStorage.getItem("userInfo");
if (onLoadUserInfo) {
  const parsedUserInfo = JSON.parse(onLoadUserInfo);
  savedUser.innerHTML = `<h2>Saved user:</h2> <h4>Name:${parsedUserInfo.name}</h4><h4>email:${parsedUserInfo.email}</h4>`;
}

userForm.addEventListener("submit", (e) => {
  // console.log("e >>>", e);
  e.preventDefault();
  const name = userForm.elements["name"].value;
  const email = userForm.elements["email"].value;
  const userInfo = { name, email };

  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  // fetching from localStorage
  const savedUserInfo = localStorage.getItem("userInfo");
  const parsedSavedUserInfo = JSON.parse(savedUserInfo);

  // displaying the saved user
  savedUser.innerHTML = `<h2>Saved user:</h2> <h4>Name:${parsedSavedUserInfo.name}</h4><h4>email:${parsedSavedUserInfo.email}</h4>`;

  // reseting the form field to re-input the values
  // userForm.reset();
});
// Task 4: Write a script to remove an item from 'localStorage'. Log the 'localStorage' content before and after removal
localStorage.setItem("item", "Hi I am inside localStorage!");
// console.log("Before removal >>>>", localStorage.getItem("item"));
console.log("Before removal >>>");
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}
console.log("--------------------------------");
console.log("After removal >>>>");
localStorage.removeItem("item");
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

// -------------------------------------------------------------------------------------------------------

// Activity 3: Undestanding Session storage
// Task 5: Write a scrpt to save a string value to 'sessionStorage' and retrieve it. Log the retrieved value
const userSession = "2hr";
sessionStorage.setItem("userSession", userSession);
const retrievedUserSession = sessionStorage.getItem("userSession");
console.log("retieved string >>>", retrievedUserSession);
// Task 6: Write a script to save an object to 'sessionStorage' by converting it to a JSON string. Retrieve and parse the object,
// then log it
const sessionObject = { name: "testUser", address: "ABC street London" };
sessionStorage.setItem("userDetails", JSON.stringify(sessionObject));
const retrievedSession_object = sessionStorage.getItem("userDetails");
console.log("Without parsing type is =>", typeof retrievedSession_object);
const parsedString = JSON.parse(retrievedSession_object);
console.log("Parsed object >>>", parsedString);
console.log("type of parsed string is => ", typeof parsedString);

// -----------------------------------------------------------------------------------------------------------

// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g. name and email) to 'sessionStorage' when submitted. Retrieve and display
// the saved data on page load
const sessionUserForm = document.querySelector("#sessionUserForm");
const savedSessionUser = document.querySelector("#savedSessionUser");

// Checking if already anything there in the localStorage
const onLoadSessionUserInfo = sessionStorage.getItem("sessionUser");
if (onLoadSessionUserInfo) {
  const parsedSessionUserInfo = JSON.parse(onLoadSessionUserInfo);
  savedSessionUser.innerHTML = `<h2>Saved user:</h2> <h4>Name:${parsedSessionUserInfo.sessionName}</h4><h4>email:${parsedSessionUserInfo.sessionEmail}</h4>`;
}
// Handling the form
sessionUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const sessionName = sessionUserForm.elements["name"].value;
  const sessionEmail = sessionUserForm.elements["email"].value;
  const sessionUserInfo = { sessionName, sessionEmail };

  // saving to sessionStorage
  sessionStorage.setItem("sessionUser", JSON.stringify(sessionUserInfo));

  // getting userInfo from sessionStorage
  const sessionUserObject = sessionStorage.getItem("sessionUser");
  const parsedSessionUserObject = JSON.parse(sessionUserObject);
  console.log("parsedSessionUserObject >>>>>>>>>>>>>", parsedSessionUserObject);

  // displaying saved sessionStorage user info
  savedSessionUser.innerHTML = `<h2>Saved sessionUser</h2> <h4>Name:${parsedSessionUserObject.sessionName}</h4><h4>Email:${parsedSessionUserObject.sessionEmail}</h4>`;
});
// Task 8: Write a script to remove an item from 'sessionStorage'. Log the 'sessionStorage' content before and after removal
sessionStorage.setItem("item", "Hi from sessionStorage, will be removed☹️");
console.log("sessionStorage before removal: ", sessionStorage.getItem("item"));
sessionStorage.removeItem("item");
console.log("sessionStorage after removal:", sessionStorage.getItem("item"));

// ------------------------------------------------------------------------------------------------------

// Activity 5: Comparing 'localStorage' and 'sessionStorage'
// Task 9: Write a function that accepts a key and a value, and saves the value to both 'localStorage' and 'sessionStorage'.Retrieve and
// log the values from both storage mechanisms
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
}
saveToStorage("speed", "240 km/hr");
const localStorageValue = localStorage.getItem("speed");
const sessionStorageValue = sessionStorage.getItem("speed");
console.log("local value:", localStorageValue);
console.log("session value:", sessionStorageValue);
// Task 10: Write a function that clears all data from both 'localStorage' and 'sessionStorage'. Verify that both storages are empty
function clearAllStorage() {
  localStorage.clear();
  sessionStorage.clear();
}
clearAllStorage();
{
  localStorage.length === 0 && sessionStorage.length === 0
    ? console.log("Both storage are empty!")
    : console.log("Both storage is not empty");
}

// ----------------------------------------------------------------------------------------------------------

// Feature Request:
// 1. LocalStorage Script: Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.
// 2. SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.
// 3. Storage Comparison Script: Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.
// 4. Clear Storage Script: Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.

// Achievement:
// By the end of these activities, students will:

// . Understand how to use localStorage and sessionStorage for persistent and session-specific data storage.
// . Save, retrieve, and remove data from both localStorage and sessionStorage.
// . Implement form data storage using localStorage and sessionStorage .
// . Compare and contrast the use cases for localStorage and sessionStorage .
