// Day 7: Objects
// Tasks/Activities:

// Activity 1: Object creation and Access
// Task 1: Create an object representing a book with properties like title, author and year and log the object to the console
const book = {
  title: "The subtle art of not giving F*ck",
  author: "Mark Manson",
  year: "13 September 2016",
};
console.log("Book description >>>", book);
// Task 2: Access and log the title and author properties of the book
console.log(`Title >>> ${book.title} \nAuthor >>> ${book.author}`);

// -----------------------------------------------------------------------------------------------

// Activity 2: Object Methods
// Task 3: Add a method to the object book that returns a string with the book's title and author, and log the result of calling this method.
const obj_method = () => {
  return `title: ${book.title} \nauthor: ${book.author}`;
};
book.func = obj_method;
console.log("New book Obj with method func", book);
console.log(book.func());
// Task 4: Add a method to the object book that takes a parameter (year) and updates the book's year property, then log the updated object
const update_bookYear = function (year) {
  return (book.year = year);
};
update_bookYear(2017);
console.log("new book object with updated year >>>", book);

// -----------------------------------------------------------------------------------------------

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the
// library object to the console
const book_Library = {
  library_name: "The central Library",
  books: [
    { title: "Bhagwad Gita - The Song divine", author: "Ved Vyas" },
    { title: "Gora", author: "Rabindranath Tagore" },
    { title: "Godan", author: "Munshi Premchand" },
  ],
};
console.log(book_Library);
// Tas 6: Access and log the name of the library and titles of all the books in the library
console.log(book_Library.library_name);
for (let i = 0; i < book_Library.books.length; i++) {
  console.log(book_Library.books[i]);
}

// -----------------------------------------------------------------------------------------------

// Activity 4: The 'this' keyword
// Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the
// result of calling this method.
const titleAndYear = function () {
  return `Title: ${this.title}, Year: ${this.year}`;
};
book.printTitleAndYear = titleAndYear;
console.log(book.printTitleAndYear());

// -----------------------------------------------------------------------------------------------

// Activity 5: Object Iteration
// Task 8: Use a 'for...in' loop to iterate over the properties of the book object and log each property and it's value
const books = { title: "Gaban", author: "Munshi Premchand", year: 1928 };
for (let key in books) {
  console.log(">>>>>", `${key}:  ${books[key]}`);
}
// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object
console.log("Keys", Object.keys(books));
console.log("values", Object.values(books));

// -----------------------------------------------------------------------------------------------

// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's
// details.
// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for ... in loop and
// Object.keys / Object.values .

// Achievement:

// By the end of these activities, students will:

// . Create and manipulate objects with properties and methods.
// . Understand and use the this keyword in object methods.
// . Work with nested objects and arrays of objects.
// . Iterate over an object's properties using loops and built-in methods.
