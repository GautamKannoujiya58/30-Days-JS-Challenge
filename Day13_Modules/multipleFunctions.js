// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script
const func1 = () => {
  console.log("I am from func1");
};
const userDetails = {
  name: "John",
  gender: "Prefer not to say",
  country: "India",
};
const printUsername = (userName) => {
  console.log("Username >>>", userName);
};

const greeting = () => {
  console.log("Hello world!");
};
export { func1, userDetails, printUsername, greeting };
