// Day 10: Event Handling
// Tasks/Activities

// Activity 1: Basic Event Handling
// Task 1: Add a click event listner to a button that changes content of a paragraph
const button = document.getElementById("changeContentButton");
const para = document.getElementById("para");
let isclicked = true;
let originalContent = para.textContent;
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (isclicked) {
    para.textContent =
      "DOM Manipulation: When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way. This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the Document object. In this article we'll look at how to use the DOM in detail, along with some other interesting APIs that can alter your environment in interesting ways.";
  } else {
    para.textContent = originalContent;
  }
  isclicked = !isclicked;
});
// Task 2: Add a double-click event listner to an image that toggles its visibility
const toggableImage = document.getElementById("K2Mountain");
toggableImage.addEventListener("dblclick", function (e) {
  e.preventDefault();
  if (toggableImage.style.display === "none") {
    toggableImage.style.display = "block";
  } else {
    toggableImage.style.display = "none";
  }
});

// --------------------------------------------------------------------------------------------------

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background
const changeDivBackground = document.getElementById("changBackground");
changeDivBackground.addEventListener("mouseover", function (e) {
  e.preventDefault();
  changeDivBackground.style.backgroundColor = "yellow";
});
// Task 4: Add a mouseout event listener to an element that resets its background color.
changeDivBackground.addEventListener("mouseout", function (e) {
  e.preventDefault();
  changeDivBackground.style.backgroundColor = "red";
});

// --------------------------------------------------------------------------------------------------

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
const inputField = document.getElementById("keyDownEvent");
inputField.addEventListener("keydown", function (e) {
  //   e.preventDefault();
  console.log("Keydown Event >>>", e, e.key);
  console.log(`${e.key} pressed!`);
});
// Task 6: Add a keyup event listener to an input field that displays the current value in paragraph
const paraFromKeyboard = document.getElementById("paraFromKeyboard");
inputField.addEventListener("keyup", function (e) {
  console.log("Keyup Event >>>", e);
  console.log("a key was let up");
  paraFromKeyboard.textContent = inputField.value;
});

// --------------------------------------------------------------------------------------------------

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console
const myForm = document.getElementById("form");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form object >>>", e);
  const myFormData = new FormData(myForm);
  console.log("myFormData >>>", myFormData.entries().key);
  for (const [key, value] of myFormData.entries()) {
    console.log(`${key}: ${value}`);
  }
});
// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph
const selectedValue = document.getElementById("paraSelect");
const dropdownElmt = document.getElementById("select");
dropdownElmt.addEventListener("change", function (e) {
  e.preventDefault();
  console.log("E >>>>>>>>", e);
  selectedValue.textContent = e.target.value;
});

// --------------------------------------------------------------------------------------------------

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation
const parentUL = document.getElementById("parentUL");
parentUL.addEventListener("click", function (e) {
  console.log("event Object >>>>>", e);
  if (e.target.tagName === "LI") {
    const liText = e.target.textContent;
    console.log("LiText >>>", liText);
  }
});
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements
const parentDiv = document.getElementById("parentDiv");
const newElmt = document.createElement("h3");
newElmt.textContent = "Heading 3";
parentDiv.appendChild(newElmt);
parentDiv.addEventListener("click", function (e) {
  if (e.target.tagName === newElmt.tagName) {
    console.log(e.target.textContent);
  }
});

// --------------------------------------------------------------------------------------------------

// Feature Request:
// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an
// element.
// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event
// listeners.
// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child
// elements.

// Achievement:
// By the end of these activities, students will:
// · Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.
// . Understand and handle form events.
// . Implement event delegation to manage events on dynamically added elements.
// . Make web pages interactive by responding to various user actions.
