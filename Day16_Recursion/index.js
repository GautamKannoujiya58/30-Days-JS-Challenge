// Day 16 Recursion
// Tasks/Activities

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for few test cases.
function calculate_factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculate_factorial(n - 1);
}
// console.log(calculate_factorial(4)); // 24
// console.log(calculate_factorial(10)); // 3628800
// console.log(calculate_factorial(6)); // 720
// console.log(calculate_factorial(3)); // 6

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases
// fibonacci number: 0,1,1,2,3,5,8,13,21
function calculate_FibonacciNum(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return calculate_FibonacciNum(n - 1) + calculate_FibonacciNum(n - 2);
}

// console.log("Fibonacci num >>>", calculate_FibonacciNum(4)); // 3
// console.log("Fibonacci num >>>", calculate_FibonacciNum(7)); // 13
// console.log("Fibonacci num >>>", calculate_FibonacciNum(20)); // 6765

// -----------------------------------------------------------------------------------------------------

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for few test cases
function arr_sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + arr_sum(arr.slice(1));
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr_sum(arr)); // 55
// console.log(arr_sum([4, 10, 15, 200])); // 229
// console.log(arr_sum([10, 7, 4, 20, 600, 9, 1])); // 651

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for few cases
function maxElmt(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr[0] <= arr[1]) {
    return maxElmt(arr.slice(1));
  } else {
    arr.splice(1, 1);
    return maxElmt(arr);
  }
}
// console.log(maxElmt([0, 10, 1, 100, 9, 2000, 6, 5, 1000, 1, -3000, 2000])); // 2000
// console.log(maxElmt([0, 8, 2, 1])); // 8
// console.log(maxElmt([100, 1000, 1100, 99])); // 1100

// -----------------------------------------------------------------------------------------------------

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for few test cases
function reverseString(str) {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}
// console.log(reverseString("Summer")); // remmuS
// console.log(reverseString("My name is quickSilver")); // revliSkciuq si eman yM
// console.log(reverseString("MALAYALAM")); // MALAYALAM
// console.log(reverseString("DiscoDancer")); // recnaDocsiD

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for few test cases
function isPalindrome(str) {
  const newStr = str.toLowerCase();
  if (newStr.length === 0) {
    return "Yes its a Palindrome";
  }
  if (newStr[0] === newStr[newStr.length - 1]) {
    return isPalindrome(newStr.slice(1, -1));
  }
  return "No its not a Palindrome";
}
// console.log(isPalindrome("MALAYALAM")); // Palindrome
// console.log(isPalindrome("dang")); // Not a Palindrome
// console.log(isPalindrome("1221")); // Palindrome
// console.log(isPalindrome("KAAK")); // Palindrome
// console.log(isPalindrome("pop")); // Palindrome
// console.log(isPalindrome("125SHIELD")); // Not a Palindrome

// -----------------------------------------------------------------------------------------------------

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases
function recursiveBinarySearch(
  arr,
  targetElmt,
  start = 0,
  end = arr.length - 1
) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === targetElmt) {
    return mid;
  }

  if (arr[mid] > targetElmt) {
    return recursiveBinarySearch(arr, targetElmt, start, mid - 1);
  } else {
    return recursiveBinarySearch(arr, targetElmt, mid + 1, end);
  }
}

// console.log(recursiveBinarySearch([10, 11, 14, 25, 50, 60, 74], 74)); // 6
// console.log(recursiveBinarySearch([10, 11, 14, 25, 50, 60, 74], 10)); // 0
// console.log(recursiveBinarySearch([10, 11, 14, 25, 50, 60, 74], 50)); // 4
// console.log(recursiveBinarySearch([10, 11, 14, 25, 50, 60, 74], 30)); // -1

// Task 8: Write a recursive function to count the occurrence of a target element in an array. Log the result for few test cases
function countTargetElmt(arr, targetElmt) {
  if (arr.length === 0) {
    return 0;
  }
  let count = 0;
  if (arr[0] === targetElmt) {
    count++;
  }
  // console.log("ARRR >>>>", arr);
  return count + countTargetElmt(arr.slice(1), targetElmt);
}
// console.log(countTargetElmt([1, 2, 3, 3, 4], 3)); // 2
// console.log(countTargetElmt([10, 11, 23, 10, 10, 10, 10, 5, 4, 1, 1, 1], 10)); // 5
// console.log(countTargetElmt([10, 23, 2, 3, 3, 12, 10, 1, 1], 10)); // 2

// ---------------------------------------------------------------------------------------------------

// Activity 5: Tree Traversal (Optional)
// . Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// . Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

// ------------------------------------------------------------------------------------------------------

// Feature Request:
// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
// 4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).

// Achievement:
// By the end of these activities, students will:
// . Understand and implement basic recursion.
// . Apply recursion to solve problems with arrays and strings.
// · Use recursion for searching and counting elements in arrays.
// . Perform tree traversal and calculate tree depth using recursion (optional).
