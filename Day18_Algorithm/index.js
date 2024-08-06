// Day 18: Algorithm
// Tasks/Activities:

// Activity 1:
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. log the sorted array
function bubble_sort(arr) {
  if (arr.length === 0) {
    return "Empty array!";
  }
  let iteration = arr.length - 1;
  while (iteration !== 0) {
    for (let i = 0; i < iteration; i++) {
      if (arr[i] >= arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    iteration--;
  }
  return arr;
}
console.log(bubble_sort([7, 10, 1, 5, 0, 8, 9]));
console.log(bubble_sort([800, -2, 0, 40, 60, 10, 1100, 0, 6]));
console.log(bubble_sort([1100, 100, 10, 1001, -1111]));
console.log(bubble_sort([10, 4]));
console.log(bubble_sort([1]));
console.log(bubble_sort([0]));
console.log(bubble_sort([]));
console.log(bubble_sort(["Pavi", "Sach", "Gauti", "DC"]));
// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array
function selection_sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let iMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[iMin]) {
        iMin = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[iMin];
    arr[iMin] = temp;
  }
  return arr;
}
console.log(selection_sort([7, 10, 1, 5, 0, 8, 9]));
console.log(selection_sort([800, -2, 0, 40, 60, 10, 1100, 0, 6]));
console.log(selection_sort([1100, 100, 10, 1001, -1111]));
console.log(selection_sort([10, 4]));
console.log(selection_sort([1]));
console.log(selection_sort([0]));
console.log(selection_sort([]));
console.log(selection_sort(["Pavi", "Jon", "Gauti", "Tony"]));

// Task 3: Implement the quicksort algorithm to sort any array of numbers in ascending order. Log the sorted array
function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
      continue;
    }
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quick_sort(left).concat(pivot, quick_sort(right));
}

console.log(quick_sort([7, 10, 1, 5, 0, 8, 9]));
console.log(quick_sort([800, -2, 0, 40, 60, 10, 1100, 0, 6]));
console.log(quick_sort([1100, 100, 10, 1001, -1111]));
console.log(quick_sort([10, 4]));
console.log(quick_sort([1]));
console.log(quick_sort([0]));
console.log(quick_sort([]));
console.log(quick_sort(["Pavi", "Jon", "Gauti", "Tony"]));

// --------------------------------------------------------------------------------------------------------

// Activity 2: Searching Algorithm
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value
function searchTargetElmt(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return `target elmt ${target} not found in the array!`;
}
console.log(searchTargetElmt([7, 10, 1, 5, 0, 8, 9], 8));
console.log(searchTargetElmt([1], 0));
console.log(searchTargetElmt([], ""));
console.log(searchTargetElmt([100, 9, 8, 9, 21], 9));
console.log(searchTargetElmt(["Jon", "Gauti", "Pavi", "Tony"], "Pavi"));

// Task 5: Implement the Binary search algorithm to find a target value in a sorted array. Log the index of the target
function binarySearch_targetElmt(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  // console.log("Mid >>>", mid);
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `target elmt ${target} not found in the array!`;
}
// binarySearch_targetElmt([4, 5, 6, 10, 12]);
console.log("-------------------------------");
console.log(binarySearch_targetElmt([4, 5, 6, 10, 12], 6));
console.log(binarySearch_targetElmt([100, 89, 6, 3, 1, 0], 0));
console.log(binarySearch_targetElmt([0, 7, 8, 9, 100], 9));
console.log(binarySearch_targetElmt([0, 1, 3, 6, 89, 100], 0));
console.log(binarySearch_targetElmt([1], 1));
console.log(binarySearch_targetElmt([], 1));

// --------------------------------------------------------------------------------------------------------

// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrence of each character in a string. Log the character counts
function charFrequency(str) {
  let strLen = str.length;
  let frequencyObj = {};

  // console.log("String Length", strLen);
  while (strLen !== 0) {
    // let newStr = str.slice()
    let char = str[0];
    str = str.slice(1);

    if (frequencyObj[char]) {
      frequencyObj[char]++;
    } else {
      frequencyObj[char] = 1;
    }
    strLen--;
  }

  return frequencyObj;
}
console.log(charFrequency("Gautam"));
console.log(charFrequency("Pavithra "));
console.log(charFrequency("  "));

// ⭐ Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring
function longestSubstringWithoutRepeating(s) {
  let start = 0,
    maxLength = 0;
  let charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    if (charIndexMap[s[end]] !== undefined && charIndexMap[s[end]] >= start) {
      start = charIndexMap[s[end]] + 1;
    }
    charIndexMap[s[end]] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(longestSubstringWithoutRepeating("Gautam")); // 4
console.log(longestSubstringWithoutRepeating("abcabcbb")); // 3
console.log(longestSubstringWithoutRepeating("bbbbb")); // 1
console.log(longestSubstringWithoutRepeating("Pavi")); // 3

// -------------------------------------------------------------------------------------------------------------------

// Array Algorithms
// Task 8: Write a function to rotate an array by 'k' positions. Log the sorted array
function rotationBy_kPostions(arr, k) {
  // arr = [1,2,3,4,5] k = 4;
  // r1 = [5,1,2,3,4]
  // r2 = [4,5,1,2,3]
  // r3 = [3,4,5,1,2]
  // r4 = [2,3,4,5,1]
  let len = arr.length;
  k = k % len;
  for (let i = 0; i < k; i++) {
    let lastElmt = arr.pop();
    arr.unshift(lastElmt);
  }
  return arr;
}
console.log("----------------------------------");
console.log(rotationBy_kPostions([2, 4, 1, 5, 6], 8));
console.log(rotationBy_kPostions([1, 4, 5, 6, 2], 1)); // 2,1,4,5,6
// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([4, 5, 6], [1, 2, 3])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([], [1, 2, 3])); // [1, 2, 3]
console.log(mergeSortedArrays([1, 2, 3], [])); // [1, 2, 3]

// ---------------------------------------------------------------------------------------------------

// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

// -----------------------------------------------------------------------------------------------------------------

// Feature Request:
// 1. Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.
// 2. Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.
// 3. String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.
// 4. Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.
// 5. Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).

// Achievement:
// By the end of these activities, students will:
// Implement and understand common sorting algorithms.
// Implement and understand common searching algorithms.
// Solve string manipulation problems using algorithms.
// Perform array operations using algorithms.
// Apply dynamic programming to solve complex problems (optional).
