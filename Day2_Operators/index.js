"use-strict";
// Day 2: Operators
// Tasks / Activities:

// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log result to the console
const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
console.log("Sum >>>", sum);
// Task 2: Write a program to subtract two numbers and log the result to the console
const gross_wt = 100;
const package_wt = 20;
const net_wt = gross_wt - package_wt;
console.log("net_wt >>>", net_wt);
// Task 3: Write a program to multiply two numbers and log the result to the console
const length = 20;
const breadth = 10;
const area_rectangle = length * breadth;
console.log("area_rectangle >>>", area_rectangle);
// Task 4: Write a program to divide two numbers and log the result to the console
const total_bags = 100;
const no_OfPeople = 30;
const bags_perPerson = total_bags / no_OfPeople;
console.log("bags_perPerson >>>", bags_perPerson);
// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console
const no_OfHouse = 500;
const no_OfCustomer = 319;
const no_OfHouseLeft = no_OfHouse % no_OfCustomer;
console.log("no_OfHouseLeft >>>", no_OfHouseLeft);

// ----------------------------------------------------------------------------------

// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console
let var1 = 30;
var1 += 3;
console.log("var1 >>>", var1);
// Task 7: Use the -= operator to subtract a number to a variable and log the result to the console
let var2 = 100;
var2 -= 20;
console.log("var2 >>>", var2);

// -----------------------------------------------------------------------------------

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console
const var3 = 15;
const var4 = 35;
console.log(var3 > var4);
console.log(var3 < var4);
// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console
const value1 = 150;
const value2 = 200;
console.log(value1 >= value2);
console.log(value1 <= value2);
// Task 10: Write a program to compare two numbers using == and === and log the result to the console
const str1 = "Gautam";
const str2 = "Gautam";
console.log("------------------");
console.log(str1 == str2); // true
console.log(str1 === str2); // true
const str3 = "gautam";
const str4 = "Gautam";
console.log("------------------");
console.log(str3 == str4); // false
console.log(str3 === str4); // false
const num3 = 10;
const num4 = +"10";
console.log("num4 >>>", typeof num4);
console.log("-----------------");
console.log(num3 == num4); // true
console.log(num3 === num3); // true

// -----------------------------------------------------------------------------------

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console
const cond1 = 20;
const cond2 = 30;
console.log("-----------------");
console.log("&& >>>", cond1 && cond2); // 30
console.log("|| >>>", cond1 || cond2); // 20
console.log("! >>>", !cond1); // false
const condition1 = 3 < 4; // true
const condition2 = 2 > 1; // true
const AND_result = condition1 && condition2; // true && true => true
console.log("AND_result >>>", AND_result);
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console
const cond3 = 10;
const cond4 = false;
console.log("----------------");
console.log("|| >>>", cond3 || cond4); // 10
console.log("&& >>>", cond3 && cond4); // false
console.log("! >>>", !false);
const condition3 = "Nick";
const condition4 = "Nick";
const OR_result = condition3 && condition4;
console.log("OR_result >>>", OR_result); // Nick
// Task 13: Write a program that uses the ! operator to combine two conditions and log the result to the console
const truthy_value = true;
const Negate_result = !truthy_value;
console.log("Negate_result >>>", Negate_result); // false

// -----------------------------------------------------------------------------------

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
const num5 = 19;
{
  num5 > 0
    ? console.log(num5, "is a postive number")
    : console.log(num5, "is an negative number");
}
