// Stack overflow
// function A() {
//   return A();
// }

// String reversal (recursion)
function reverseString(str) {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}
// console.log(reverseString("Summer"));

// Palindrome (recursion)
function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  return false;
}
// console.log(isPalindrome("MALAYALAM"));
// console.log(isPalindrome("Location"));

// Number recursion
// Decimal to Binary
function decimalToBinary(num, res) {
  if (num === 0) {
    return res;
  }
  res = num % 2;
}
