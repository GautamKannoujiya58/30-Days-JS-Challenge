// Day 9: DOM Manipulation
// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content
console.log("FROM INDEX.JS");
setTimeout(function () {
  const changedContent = document.getElementById("changeMyContent");
  changedContent.textContent = "This heading is Manipulated!";
}, 2000);
// Task 2: Select an HTML element by its class and change its background color

setTimeout(function () {
  const changedBackground = document.getElementsByClassName(
    "changeBackgroundColor"
  );
  for (let i = 0; i < changedBackground.length; i++) {
    changedBackground[i].textContent = "After background color change";
    changedBackground[i].style.backgroundColor = "red";
  }
}, 2000);

// ----------------------------------------------------------------------------------------------

// Activity 2: Creating and Appending ELements
// Task 3: Create a new 'div' element with some text content and append it to the body
const divElement = document.createElement("div");
const heading = document.createElement("h1");
heading.textContent = "appended heading to div Element to the body";
divElement.appendChild(heading);
document.body.appendChild(divElement);
// Task 4: Create a new 'li' element and add it to an existing 'ul' list
const liElmt = document.createElement("li");
liElmt.textContent = "I am in ul tag";
const ulElmt = document.getElementById("unorderedList");
ulElmt.appendChild(liElmt);

// ----------------------------------------------------------------------------------------------

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM
setTimeout(function () {
  const vanishedElment = document.getElementById("vanish");
  vanishedElment.remove();
}, 2000);
// Task 6: Remove the last child of the specific HTML elment
//1st way
const parentUL1 = document.querySelector("#parentUL");
console.log("ParenteUL>>>>>", parentUL1);
parentUL1.lastElementChild.remove();
// 2nd way
const parentUL2 = document.getElementById("parentUL");
console.log("ParenteUL>>>>>", parentUL2);
parentUL2.lastElementChild.remove();

// ----------------------------------------------------------------------------------------------

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of it's attributes (e.g.src of an 'img' tag)
const HTMLElmt = document.getElementById("instaProfile");
HTMLElmt.setAttribute("href", "https://tailwindcss.com/");
// Task 8: Add and remove a CSS class to/from an HTMl element
const addClassName = document.getElementById("element1");
addClassName.classList.add("newClassName");
// console.log(">>>>>>>", addClassName);
const classNameRemove = document.getElementById("element");
classNameRemove.classList.remove("element2");
console.log("ClassNameRemove >>>>", classNameRemove);

// ----------------------------------------------------------------------------------------------

// Activity 5: Event Handling
// Task 9: Add a click event listner to button that changes the text content of a paragraph
let isOriginalQuote = true;
const originalQuote = document.getElementById("quote").textContent;
console.log("OriginaQuote >>>", originalQuote);
document.getElementById("button").addEventListener("click", function () {
  if (isOriginalQuote) {
    document.getElementById("quote").textContent =
      "Strength is Life, Weakness is Death. Expansion is Life, Contraction is Death. Love is Life, Hatred is Death. - Swami Vivekanand";
  } else {
    document.getElementById("quote").textContent = originalQuote;
  }
  isOriginalQuote = !isOriginalQuote;
});
// Task 10: Add a mouseover event listner to an element that changes its border color
const mouseoverEvent = document
  .getElementById("borderElmt")
  .addEventListener("mouseover", function () {
    document.getElementById("borderElmt").style.border = "10px solid green";
  });

//   ----------------------------------------------------------------------------------------------

// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on
// user interactions.

// Achievement:
// By the end of these activities, students will:
// . Select and manipulate DOM elements using JavaScript.
// . Create and append new elements to the DOM.
// . Remove elements from the DOM.
// . Modify attributes and classes of HTML elements.
// · Add and handle events to make web pages interactive.
