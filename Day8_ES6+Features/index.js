// Day 8: ES6+ Features
// Tasks/Activities:

// Activity 1: Template literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age and log the string to the console
const person_name = "Pavi";
const person_age = 26;
const temp_literals = `Name: ${person_name} \nAge:${person_age}`;
console.log(temp_literals);
// Task 2: Create a multi-line string using template literals and log it to the console
const multiLine_string = `${person_name} is of ${person_age} years old. She works in a bank.`;
console.log(multiLine_string);

// --------------------------------------------------------------------------------------------------------

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console
const even_num = [10, 12, 24, 76, 88, 100];
[first_elmt, second_elmt] = even_num;
console.log(`first_elmt: ${first_elmt} second_elmt: ${second_elmt}`);
// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console
const book = {
  title: "Gora",
  author: "Rabindranath Tagore",
  year: 1910,
  country: "India",
};
const { title, author } = book;
console.log(`title: ${title} author: ${author}`);

// --------------------------------------------------------------------------------------------------------

// Activity 3: Spread and Rest Operator
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements,
// and log the new array to the console
const user_names = ["Pavi", "Sach", "Neon", "QuickSilver"];
const newUser_names = [...user_names, "Virat", "RoKo"];
console.log(newUser_names);
// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result
const sum_func = (...nums) => {
  return nums.reduce((accu, curr) => accu + curr, 0);
};
console.log(sum_func(1, 100, 11, 1));
console.log(sum_func(110, 10, 5, 4));
// Whenever we use '...' rest operator inside a function it collects all arguments and convert it into array
const example = 34;
const func = (...arg) => {
  return arg;
};
console.log(func(example));

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns thier product, with the second parameter having a default value
// of 1. Log the result of calling this function with and without the second parameter
const defaultPara_func = (arg1, arg2 = 1) => {
  return arg1 * arg2;
};
console.log("With one parameter:", defaultPara_func(4));
console.log("With two parameter:", defaultPara_func(4, 2));

// -----------------------------------------------------------------------------------------

// Activity 5: Enhanced Object Literals
// Task 8: Use enchanced object literal to create an object with methods and properties, and log the object to the console
const student1 = {
  student_name: "Pavi",
  std: "Eleventh",
  school: "RJ college of science",
  physics: 89,
  chem: 71,
  Maths: 90,
  Bio: 50,
  CS: 78,
  calculate_percentage: function () {
    const marks_obtained = Number(
      this.physics + this.chem + this.Maths + this.Bio + this.CS
    );
    const total_marks = 500;
    const percentage_obtained = (marks_obtained / total_marks) * 100;
    return percentage_obtained;
  },
};
console.log("Student object >>>", student1);
console.log(
  "Percentage obtained by: ",
  student1.student_name,
  student1.calculate_percentage()
);
// Task 9: Create an object with computed property names based on variables and log the result to the console
const var1 = "student_name";
const var2 = "percentage";

const student2 = {
  [var1]: "Sach",
  std: 12,
  school: "Don Bosco College",
  subject_marks: { physics: 78, maths: 87, chem: 67, bio: 78, CS: 89 },
  calculate_percentage: function () {
    const marks_obtained = Number(
      this.subject_marks.physics +
        this.subject_marks.maths +
        this.subject_marks.chem +
        this.subject_marks.bio +
        this.subject_marks.CS
    );
    const total_marks = 500;
    const percentage_obtained = (marks_obtained / total_marks) * 100;
    return percentage_obtained.toFixed(2);
  },
  [var2]: function () {
    return this.calculate_percentage();
  },
};
console.log(">>>>>>", student2);
console.log(
  "Student name:",
  student2[var1],
  "got",
  student2[var2](),
  "percentage"
);

// -----------------------------------------------------------------------------------------

// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with
// embedded variables and multi-line strings.
const assassination_year = 1865;
const country = "USA";
console.log(
  `Abrham Lincol was 16th president of ${country} and he was assasinated in the year ${assassination_year} 
  following implementation of "Emancipation of Proclamation.`
);
// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and
// the rest operator to handle multiple function arguments.
// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it
// with different arguments.
// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods
// and computed property names.

// Achievement:

// By the end of these activities, students will:

// . Understand and use template literals for string interpolation and multi-line strings.
// · Apply destructuring to extract values from arrays and objects.
// . Utilize spread and rest operators for array manipulation and function arguments.
// . Define functions with default parameters.
// · Create objects using enhanced object literals, including methods and computed property names.
