// Activity 3: Importing Entier Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script
// and use its properties
const name = "Logan";
const phone_num = 9076049629;
const address = "ABC Mumbai street";
const squareNum = (num) => {
  console.log(Math.pow(num, 2));
};
const area_rectanble = (l, b) => {
  console.log("Area rectangle >>>", l * b);
};
export { name, phone_num, address, squareNum, area_rectanble };
